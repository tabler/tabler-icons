import fs from 'fs-extra';
import path from 'path';
import { PACKAGES_DIR, getAliases, getIconName, toPascalCase, getAllIcons } from './helpers.mjs';
import { stringify } from 'svgson';

/**
 * Generate the sources of a framework package: one module per icon, the icons
 * index, the aliases and, unless turned off, the icons list and the dynamic
 * imports.
 *
 * @param name package directory name inside `packages/`, e.g. `icons-react`
 * @param componentTemplate returns the source of a single icon module; called
 *   with `{ type, name, namePascal, children, stringify, svg }`
 * @param extension extension of the generated icon modules
 * @param moduleNaming file names of the icon modules: `pascal` for
 *   `IconArrowLeft`, `kebab` for `arrow-left`
 * @param importExtension keep the extension in the specifiers that re-export
 *   the icon modules (`./arrow-left.svelte` instead of `./arrow-left`)
 * @param key add a `key` attribute (`svg-0`, `svg-1`, …) to every icon node
 * @param pascalCase rename `stroke-width` to `strokeWidth` in icon nodes
 * @param dtsEntry generate `src/icons-dts`, a single-module stand-in for the
 *   icon modules that the declaration bundle is built from (see `iconsDts`
 *   in rollup-plugins.mjs)
 * @param iconsList generate `src/icons-list.ts`, the names of all icons
 * @param dynamicImports generate `src/dynamic-imports.ts`, lazy loaders of
 *   the icon modules keyed by icon name
 */
export const buildJsIcons = ({
  name,
  componentTemplate,
  extension = 'js',
  moduleNaming = 'pascal',
  importExtension = false,
  key = true,
  pascalCase = false,
  dtsEntry = false,
  iconsList = true,
  dynamicImports = true,
}) => {
  const moduleName = (iconName) =>
    moduleNaming === 'pascal' ? `Icon${toPascalCase(iconName)}` : iconName;
  const specifier = (iconName) =>
    `${moduleName(iconName)}${importExtension ? `.${extension}` : ''}`;

  const DIST_DIR = path.resolve(PACKAGES_DIR, name);
  const aliases = getAliases(),
    allIcons = getAllIcons(true, true);

  let index = [];
  let dtsIcons = [];
  Object.entries(allIcons).forEach(([type, icons]) => {
    icons.forEach((icon) => {
      const children = icon.obj.children
        .map(({ name, attributes }, i) => {
          if (key) {
            attributes.key = `svg-${i}`;
          }

          if (pascalCase) {
            attributes.strokeWidth = attributes['stroke-width'];
            delete attributes['stroke-width'];
          }

          return [name, attributes];
        })
        .filter(([, attributes]) => {
          return !attributes.d || attributes.d !== 'M0 0h24v24H0z';
        });

      const iconName = getIconName(icon.name, type),
        iconNamePascal = toPascalCase(iconName);

      let component = componentTemplate({
        type,
        name: iconName,
        namePascal: iconNamePascal,
        children,
        stringify,
        svg: icon.content,
      });

      let filePath = path.resolve(DIST_DIR, 'src/icons', `${moduleName(iconName)}.${extension}`);
      fs.writeFileSync(filePath, component, 'utf-8');

      dtsIcons.push({
        exportName: `Icon${iconNamePascal}`,
        module: path.basename(filePath, `.${extension}`),
        // the JSDoc block documenting the component, if the template has one
        doc: component.match(/\/\*\*(?:(?!\*\/)[^])*\*\/(?=\s*const )/)?.[0],
      });

      index.push(`export { default as Icon${iconNamePascal} } from './${specifier(iconName)}';`);
    });
  });

  fs.writeFileSync(path.resolve(DIST_DIR, 'src/icons/index.ts'), index.join('\n'), 'utf-8');

  // Write aliases
  const aliasesStr = Object.entries(aliases || {})
    .map(
      ([from, to]) =>
        `export { default as Icon${toPascalCase(from)} } from './icons/${specifier(to)}';\n`,
    )
    .join('');

  fs.writeFileSync(path.resolve(DIST_DIR, `./src/aliases.ts`), aliasesStr || `export {};`, 'utf-8');

  if (dtsEntry) {
    buildDtsEntry({ dir: path.resolve(DIST_DIR, 'src/icons-dts'), icons: dtsIcons, aliases });
  }

  if (iconsList) {
    buildIconsList(DIST_DIR);
  }

  if (dynamicImports) {
    buildIconsDynamicImport(DIST_DIR, moduleName);
  }
};

/**
 * Every icon module has the same type, but emitting declarations for each of
 * them separately dominates the bundle build time. Instead, write one module
 * that re-declares all icons with the type inferred from a real icon module,
 * and one that maps aliases onto it.
 */
const buildDtsEntry = ({ dir, icons, aliases }) => {
  fs.ensureDirSync(dir);

  const index = [`import Icon from '../icons/${icons[0].module}';`, ''];
  icons.forEach(({ exportName, doc }) => {
    if (doc) {
      index.push(doc);
    }
    index.push(`export const ${exportName} = Icon;`);
  });
  fs.writeFileSync(path.resolve(dir, 'index.ts'), index.join('\n'), 'utf-8');

  const aliasesStr = Object.entries(aliases || {})
    .map(
      ([from, to]) =>
        `export { Icon${toPascalCase(to)} as Icon${toPascalCase(from)} } from './index';\n`,
    )
    .join('');
  fs.writeFileSync(path.resolve(dir, 'aliases.ts'), aliasesStr || `export {};`, 'utf-8');
};

const buildIconsList = (DIST_DIR) => {
  const allIcons = getAllIcons();

  let index = [];
  Object.entries(allIcons).forEach(([type, icons]) => {
    icons.forEach((icon) => {
      index.push(getIconName(icon.name, type));
    });
  });

  fs.writeFileSync(
    path.resolve(DIST_DIR, `./src/icons-list.ts`),
    `export default ${JSON.stringify(index, null, 2)};`,
    'utf-8',
  );
};

const buildIconsDynamicImport = (DIST_DIR, moduleName) => {
  const allIcons = getAllIcons();

  let dynamicImportString = 'export default {';
  Object.entries(allIcons).forEach(([type, icons]) => {
    icons.forEach((icon) => {
      const iconName = getIconName(icon.name, type);

      dynamicImportString += `  '${iconName}': () => import('./icons/${moduleName(iconName)}'),\n`;
    });
  });

  dynamicImportString += '};\n';

  fs.writeFileSync(
    path.resolve(DIST_DIR, `./src/dynamic-imports.ts`),
    dynamicImportString,
    'utf-8',
  );
};
