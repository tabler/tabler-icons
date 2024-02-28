import cp from 'child_process'
import { getArgvs, getPackageJson, printChangelog } from './helpers.mjs'

const p = getPackageJson(),
    argv = getArgvs(),
    version = argv['latest-version'] || `${p.version}`

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
