import cp from 'child_process'
import { getPackageJson, printChangelog } from './helpers.mjs'

const p = getPackageJson()
const version = `v${p.version}`

if (version) {
  cp.exec(`git diff ${version} HEAD --name-status src/_icons`, function(err, ret) {

    let newIcons = [], modifiedIcons = [], renamedIcons = []

    ret.replace(/A\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
      newIcons.push(fileName)
    })

    ret.replace(/M\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
      modifiedIcons.push(fileName)
    })

    ret.replace(/R[0-9]+\s+src\/_icons\/([a-z0-9-]+)\.svg\s+src\/_icons\/([a-z0-9-]+).svg/g, function(m, fileNameBefore, fileNameAfter) {
      renamedIcons.push([fileNameBefore, fileNameAfter])
    })

    modifiedIcons = modifiedIcons.filter(function(el) {
      return newIcons.indexOf(el) < 0
    })

    printChangelog(newIcons, modifiedIcons, renamedIcons, true)
  })
}
