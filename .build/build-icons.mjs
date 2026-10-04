import fs from 'fs-extra';
import path from 'path';
import { PACKAGES_DIR, getAliases, toPascalCase, getAllIcons } from './helpers.mjs';
import { stringify } from 'svgson';

/**
 * Build icons
 *
 * @param name package directory name inside `packages/`, e.g. `icons-react`
 * @param componentTemplate returns the source of a single icon module; called
 *   with `{ type, name, namePascal, children, stringify, svg }`
 * @param indexItemTemplate returns the line re-exporting an icon from the
 *   icons index; called with `{ type, name, namePascal, svg }`
 * @param aliasTemplate returns the line exporting an alias in
 *   `src/aliases.ts`; called with `{ from, to, fromPascal, toPascal }`. When
 *   omitted, the aliases file is left empty
 * @param extension extension of the generated icon modules
 * @param key add a `key` attribute (`svg-0`, `svg-1`, …) to every icon node
 * @param pascalCase rename `stroke-width` to `strokeWidth` in icon nodes
 * @param pascalName name icon modules `Icon<PascalName>` instead of the
 *   kebab-case icon name
 * @param indexFile file name of the icons index inside `src/icons`
 * @param dtsEntry generate `src/icons-dts`, a single-module stand-in for the
 *   icon modules that the declaration bundle is built from (see `iconsDts`
 *   in rollup-plugins.mjs)
 */
export const buildJsIcons = ({
  name,
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  extension = 'js',
  key = true,
  pascalCase = false,
  pascalName = true,
  indexFile = 'icons.ts',
  dtsEntry = false,
}) => {
  const DIST_DIR = path.resolve(PACKAGES_DIR, name);
  const aliases = getAliases(),
    allIcons = getAllIcons(true, true);

  let index = [];
  let dtsIcons = [];
  Object.entries(allIcons).forEach(([type, icons]) => {
    icons.forEach((icon, i) => {
      // process.stdout.write(
      //   `Building \`${name}\` ${type} ${i}/${icons.length}: ${icon.name.padEnd(42)}\r`,
      // );

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
        .filter((i) => {
          const [name, attributes] = i;
          return !attributes.d || attributes.d !== 'M0 0h24v24H0z';
        });

      const iconName = `${icon.name}${type !== 'outline' ? `-${type}` : ''}`,
        iconNamePascal = `${icon.namePascal}${type !== 'outline' ? toPascalCase(type) : ''}`;

      let component = componentTemplate({
        type,
        name: iconName,
        namePascal: iconNamePascal,
        children,
        stringify,
        svg: icon.content,
      });

      let filePath = path.resolve(
        DIST_DIR,
        'src/icons',
        `${pascalName ? `Icon${iconNamePascal}` : iconName}.${extension}`,
      );
      fs.writeFileSync(filePath, component, 'utf-8');

      dtsIcons.push({
        exportName: `Icon${iconNamePascal}`,
        module: path.basename(filePath, `.${extension}`),
        // the JSDoc block documenting the component, if the template has one
        doc: component.match(/\/\*\*(?:(?!\*\/)[^])*\*\/(?=\s*const )/)?.[0],
      });

      index.push(
        indexItemTemplate({
          type,
          name: iconName,
          namePascal: iconNamePascal,
          svg: icon.content,
        }),
      );
    });
  });

  fs.writeFileSync(path.resolve(DIST_DIR, `src/icons/${indexFile}`), index.join('\n'), 'utf-8');

  // Write aliases
  let aliasesStr = '';
  if (aliases && aliasTemplate) {
    Object.entries(aliases).forEach(([from, to]) => {
      aliasesStr += aliasTemplate({
        from,
        to,
        fromPascal: toPascalCase(from),
        toPascal: toPascalCase(to),
      });
    });
  }

  fs.writeFileSync(path.resolve(DIST_DIR, `./src/aliases.ts`), aliasesStr || `export {};`, 'utf-8');

  if (dtsEntry) {
    buildDtsEntry({ dir: path.resolve(DIST_DIR, 'src/icons-dts'), icons: dtsIcons, aliases });
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

export const buildIconsList = (name) => {
  const DIST_DIR = path.resolve(PACKAGES_DIR, name);
  const allIcons = getAllIcons(false, true);

  let index = [];
  Object.entries(allIcons).forEach(([type, icons]) => {
    icons.forEach((icon, i) => {
      // process.stdout.write(
      //   `Building \`${name}\` ${type} ${i}/${icons.length}: ${icon.name.padEnd(42)}\r`,
      // );

      const iconName = `${icon.name}${type !== 'outline' ? `-${type}` : ''}`;

      index.push(iconName);
    });
  });

  fs.writeFileSync(
    path.resolve(DIST_DIR, `./src/icons-list.ts`),
    `export default ${JSON.stringify(index, null, 2)};`,
    'utf-8',
  );
};

export const buildIconsDynamicImport = (name) => {
  const DIST_DIR = path.resolve(PACKAGES_DIR, name);
  const allIcons = getAllIcons(false, true);

  let dynamicImportString = 'export default {';
  Object.entries(allIcons).forEach(([type, icons]) => {
    icons.forEach((icon, i) => {
      // process.stdout.write(
      //   `Building \`${name}\` ${type} ${i}/${icons.length}: ${icon.name.padEnd(42)}\r`,
      // );

      const iconName = `${icon.name}${type !== 'outline' ? `-${type}` : ''}`,
        iconNamePascal = `${icon.namePascal}${type !== 'outline' ? toPascalCase(type) : ''}`;

      dynamicImportString += `  '${iconName}': () => import('./icons/Icon${iconNamePascal}'),\n`;
    });
  });

  dynamicImportString += '};\n';

  fs.writeFileSync(
    path.resolve(DIST_DIR, `./src/dynamic-imports.ts`),
    dynamicImportString,
    'utf-8',
  );
};
