import glob from 'glob'
import matter from 'gray-matter'

const currentDirPath = path.dirname(fileURLToPath(import.meta.url))

const getRawIconData = (content) => {
  return content
      .replace('<svg>', '')
      .replace('</svg>', '')
      .replace(/\n\s+/g, '')
      .trim()
}

export const getIcons = () => {
  return glob.sync(path.join(currentDirPath, '../src/*.svg')).map(icon => {
    const svg = fs.readFileSync(icon, 'utf-8'),
        name = path.basename(icon, '.svg')

    const { content, data } = matter(svg)

    return {
      name,
      content: getRawIconData(content, name),
      ...data
    }
  })
}

export const groupByCategory = (items) => {
  return Object.values(items.reduce((group, item) => {
    const { category } = item;

    group[category] = group[category] ?? {
      name: category,
      items: []
    };

    group[category].items.push(item);
    return group;
  }, {}))
}
