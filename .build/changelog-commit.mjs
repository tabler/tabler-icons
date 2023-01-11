import cp from 'child_process'
import { printChangelog } from './helpers.mjs'

cp.exec('git status', function(err, ret) {
  let newIcons = [], modifiedIcons = [], renamedIcons = []

  ret.replace(/new file:\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
    newIcons.push(fileName)
  })

  ret.replace(/modified:\s+src\/_icons\/([a-z0-9-]+)\.svg/g, function(m, fileName) {
    modifiedIcons.push(fileName)
  })

  ret.replace(/renamed:\s+src\/_icons\/([a-z0-9-]+).svg -> src\/_icons\/([a-z0-9-]+).svg/g, function(m, fileNameBefore, fileNameAfter) {
    renamedIcons.push([fileNameBefore, fileNameAfter])
  })

  modifiedIcons = modifiedIcons.filter(function(el) {
    return newIcons.indexOf(el) < 0
  })

  printChangelog(newIcons, modifiedIcons, renamedIcons)
})
