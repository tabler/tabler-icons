import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, fireEvent, cleanup } from "@testing-library/vue"
import { Icon2fa } from "./src/tabler-icons-vue.ts"

describe("Vue Icon component", () => {
  afterEach(() => cleanup())

  it("should render icon component", () => {
    const { container } = render(Icon2fa)
    expect(container.getElementsByTagName("svg").length).toBeGreaterThan(0);
  })

  it('should add a class to the element', () => {
    const { container } = render(Icon2fa, {
      props: {
        class: 'test-class',
      },
    })

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg).toHaveClass('test-class')
    expect(svg).toHaveClass('tabler-icon')
    expect(svg).toHaveClass('tabler-icon-2fa')
  })

  it('should add a style attribute to the element', () => {
    const { container } = render(Icon2fa, {
      props: {
        style: 'color: red',
      },
    })

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg).toHaveStyle('color: rgb(255, 0, 0)')
  })

  it("should update svg attributes when there are props passed to the component", () => {
    const { container } = render(Icon2fa, {
      props: {
        size: 48,
        color: "red",
        "stroke-width": 4,
      },
    })

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg.getAttribute("width")).toBe("48")
    expect(svg.getAttribute("stroke")).toBe("red")
    expect(svg.getAttribute("stroke-width")).toBe("4")
  })

  it('should call the onClick event', async () => {
    const onClick = vi.fn()
    const { container } = render(Icon2fa, {
      attrs: {
        onClick,
      }
    })

    const svg = container.getElementsByTagName("svg")[0]

    await fireEvent.click(svg)

    expect(onClick).toHaveBeenCalled()
  })

  it('should pass children to the icon slot', () => {
    const testText = 'Hello World'
    const template = {
      name: 'Stub',
      template: `<text>${testText}</text>`
    }
    const { getByText, container } = render(Icon2fa, {
      slots: {
        default: template
      }
    })

    const textElement = getByText(testText)

    expect(textElement).toBeInTheDocument()
    expect(container.innerHTML).toMatchInlineSnapshot(`"<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-2fa"><path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54"></path><path d="M10 16v-8h4"></path><path d="M10 12l3 0"></path><path d="M17 16v-6a2 2 0 0 1 4 0v6"></path><path d="M17 13l4 0"></path><text>Hello World</text></svg>"`);
  });

  it("should match snapshot", () => {
    const { container } = render(Icon2fa);
    expect(container.innerHTML).toMatchInlineSnapshot(`"<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-2fa"><path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54"></path><path d="M10 16v-8h4"></path><path d="M10 12l3 0"></path><path d="M17 16v-6a2 2 0 0 1 4 0v6"></path><path d="M17 13l4 0"></path></svg>"`)
  })
})
