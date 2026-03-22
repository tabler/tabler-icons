import cp from 'child_process'
import { getPackageJson, printChangelog } from './helpers.mjs'

const p = getPackageJson(),
    version = process.env.LATEST_VERSION || `${p.version}`

if (version) {
  cp.exec(`git diff ${version} HEAD --name-status ./icons`, function(err, ret) {

    let newIcons = [], modifiedIcons = [], renamedIcons = []

    ret.replace(/A\s+icons\/([a-z0-9-\/]+)\.svg/g, function(m, fileName) {
      newIcons.push(fileName)
    })

    ret.replace(/M\s+icons\/([a-z0-9-\/]+)\.svg/g, function(m, fileName) {
      modifiedIcons.push(fileName)
    })

    ret.replace(/R[0-9]+\s+icons\/([a-z0-9-\/]+)\.svg\s+icons\/([a-z0-9-\/]+).svg/g, function(m, fileNameBefore, fileNameAfter) {
      renamedIcons.push([fileNameBefore, fileNameAfter])
    })

    modifiedIcons = modifiedIcons.filter(function(el) {
      return newIcons.indexOf(el) < 0
    })

    printChangelog(newIcons, modifiedIcons, renamedIcons, true)
  })
}
