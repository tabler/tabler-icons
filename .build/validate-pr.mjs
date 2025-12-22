import { execSync } from 'child_process'

// Check files added relative to main branch (for PR)
function getAddedFilesFromMain() {
  try {
    const output = execSync('git diff origin/main...HEAD --name-status', { encoding: 'utf-8' })
    const addedFiles = []
    
    output.split('\n').forEach(line => {
      if (line.startsWith('A\t')) {
        addedFiles.push(line.substring(2))
      }
    })
    
    return addedFiles
  } catch (error) {
    // Fallback: check relative to HEAD if origin/main doesn't exist
    try {
      const output = execSync('git diff --diff-filter=A --name-only', { encoding: 'utf-8' })
      return output.trim().split('\n').filter(Boolean)
    } catch {
      return []
    }
  }
}

const addedFiles = getAddedFilesFromMain()
console.log('Added files:', addedFiles)
