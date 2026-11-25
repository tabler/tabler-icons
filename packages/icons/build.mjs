import fs from 'fs'
import { getAllIconsMerged, getAllIcons } from '../../.build/helpers.mjs'

const iconsMerged = getAllIconsMerged()
const icons = getAllIcons(true, true)

const compactSvgTags = (svg) => {
  // Preserve text nodes, comments, and quoted attribute values.
  return svg.replace(
    /<!--[\s\S]*?-->|<\?[\s\S]*?\?>|<!\[CDATA\[[\s\S]*?\]\]>|<\/?[A-Za-z_](?:[^<>"']|"[^"]*"|'[^']*')*>/g,
    (tag) => {
      if (tag.startsWith('<!') || tag.startsWith('<?')) {
        return tag
      }
      return tag.replace(/("[^"]*"|'[^']*')|[ \t\r\n]+(\/?>)?/g, (_, quoted, close) => quoted ?? close ?? ' ')
    },
  )
}

const buildJSON = () => {
  console.log('Building icons.json')

  fs.writeFileSync(`./icons.json`, JSON.stringify(iconsMerged, null, 2))
}

const buildNodes = () => {
  console.log('Building tabler-nodes.json')

  Object.entries(icons).forEach(([type, icons]) => {
    const iconNodes = icons.reduce((acc, { name, obj }) => {
      acc[name] = obj.children.map(({ name, attributes }) => [name, attributes]);

      return acc;
    }, {});

    const iconNodesStringified = JSON.stringify(iconNodes, null, 2);

    fs.writeFileSync(`./tabler-nodes-${type}.json`, iconNodesStringified);
  })
}

const buildSvgs = () => {
  console.log('Building svgs')

  Object.entries(icons).forEach(([type, icons]) => {
    fs.mkdirSync(`./icons/${type}`, { recursive: true });

    icons.forEach(({ name, content, category }) => {
      const compact = compactSvgTags(content);
      fs.writeFileSync(`./icons/${type}/${name}.svg`, compact);

      if (category) {
        fs.mkdirSync(`./categories/${type}/${category}`, { recursive: true });
        fs.writeFileSync(`./categories/${type}/${category}/${name}.svg`, compact);
      }
    })
  })
}

buildJSON()
buildNodes()
buildSvgs()
