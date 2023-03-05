import TablerIcon from './tabler-icon';
import tags from '../tags.json';
import fs from 'fs'
import path, { basename } from 'path'
import { parseSync } from 'svgson'

const iconNodes = fs.readdirSync(path.resolve(__dirname, '../icons'))
  .filter((file) => path.extname(file) === '.svg')
  .map(svgFile => {
    return {
      name: basename(svgFile, '.svg'),
      obj: parseSync(contents.replace('<path stroke="none" d="M0 0h24v24H0z" fill="none"/>', ''))
    };
  })
  .reduce((acc, { name, obj }) => {
    acc[name] = obj.children.map(({ name, attributes }) => [name, attributes]);

    return acc;
  }, {});

export default Object.keys(iconNodes)
  .map(key => new TablerIcon(key, iconNodes[key], tags[key]))
  .reduce((object, icon) => {
    object[icon.name] = icon;
    return object;
  }, {});