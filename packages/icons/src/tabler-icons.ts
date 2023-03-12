import TablerIcon from './tabler-icon';
// import fs from 'fs'
// import path, { basename } from 'path'

// const iconNodes = fs.readdirSync(path.resolve(__dirname, '../icons'))
//   .filter((file) => path.extname(file) === '.svg')
//   .map(svgFile => {
//     return {
//       name: basename(svgFile, '.svg'),
//       content: fs.readFileSync(path.join(path.resolve(__dirname, '../icons'), svgFile), 'utf-8').trim().replace('<path stroke="none" d="M0 0h24v24H0z" fill="none"/>', '')
//     };
//   })

const iconNodes = [
  {
    name: 'activity',
    content: '<path d="M3 12h4l3 8l4 -16l3 8h4" />'
  },
  {
    name: 'abc',
    content: '<path d="M3 16v-6a2 2 0 1 1 4 0v6" /><path d="M3 13h4" /><path d="M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1" /><path d="M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01" />',
  }
]

const icons: Record<string, TablerIcon> = iconNodes
  .map(iconNode => new TablerIcon(iconNode.name, iconNode.content))
  .reduce((object, icon) => {
    object[icon.name] = icon;
    return object;
  }, {});

export default icons