import fs from 'fs'
import path from 'path'

describe('SVGIcon', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.innerHTML = ''
    document.body.removeChild(container)
  })
  
  test('renders the correct class and XML namespace', () => {
    container.innerHTML = fs.readFileSync(path.join('./icons', '2fa.svg'), 'utf-8')
    const svg = container.querySelector('svg')

    expect(svg.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg')
    expect(svg.classList.contains('icon')).toBe(true)
    expect(svg.classList.contains('icon-tabler')).toBe(true)
  })
})