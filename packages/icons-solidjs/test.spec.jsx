import { describe, it, expect } from 'vitest';
import { render, cleanup } from '@solidjs/testing-library'
import { Icon2fa } from "./src/tabler-icons-solidjs"

describe("Solidjs Icon component", () => {
  afterEach(() => cleanup())

  test("should render icon component", () => {
    const { container } = render(() => <Icon2fa />)
    expect(container.getElementsByTagName("svg").length).toBeGreaterThan(0);
  })

  test("should update svg attributes when there are props passed to the component", () => {
    const { container } = render(() => <Icon2fa size={48} color="red" stroke-width="4" />)

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg.getAttribute("width")).toBe("48")
    expect(svg.getAttribute("stroke")).toBe("red")
    expect(svg.getAttribute("stroke-width")).toBe("4")
  })

  it('should add a class to the element', () => {
    const { container } = render(() => <Icon2fa class="test-class" />)

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg).toHaveClass('test-class')
    expect(svg).toHaveClass('tabler-icon')
    expect(svg).toHaveClass('tabler-icon-2fa')
  })

  it('should add a style attribute to the element', () => {
    const { container } = render(() => <Icon2fa style="color: red" />)

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg).toHaveStyle('color: rgb(255, 0, 0)')
  })

  test("should match snapshot", () => {
    const { container } = render(() => <Icon2fa />)
    expect(container.innerHTML).toMatchInlineSnapshot(`
      <svg xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewbox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round"
           class="tabler-icon tabler-icon-2fa "
      >
        <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54">
        </path>
        <path d="M10 16v-8h4">
        </path>
        <path d="M10 12l3 0">
        </path>
        <path d="M17 16v-6a2 2 0 0 1 4 0v6">
        </path>
        <path d="M17 13l4 0">
        </path>
      </svg>
    `)
  })
})
