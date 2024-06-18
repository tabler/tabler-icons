import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, fireEvent, cleanup } from "@testing-library/vue"
import { IconAccessible, IconAccessibleFilled } from "./src/tabler-icons-vue.ts"

describe("Vue Icon component", () => {
  afterEach(() => cleanup())

  it("should render icon component", () => {
    const { container } = render(IconAccessible)
    expect(container.getElementsByTagName("svg").length).toBeGreaterThan(0);
  })

  it('should add a class to the element', () => {
    const { container } = render(IconAccessible, {
      props: {
        class: 'test-class',
      },
    })

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg).toHaveClass('test-class')
    expect(svg).toHaveClass('tabler-icon')
    expect(svg).toHaveClass('tabler-icon-accessible')
  })

  it('should add a style attribute to the element', () => {
    const { container } = render(IconAccessible, {
      props: {
        style: 'color: red',
      },
    })

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg).toHaveStyle('color: rgb(255, 0, 0)')
  })

  it("should update svg attributes when there are props passed to the component", () => {
    const { container } = render(IconAccessible, {
      props: {
        size: 48,
        color: "red",
        "stroke": 4,
      },
    })

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg.getAttribute("width")).toBe("48")
    expect(svg.getAttribute("stroke")).toBe("red")
    expect(svg.getAttribute("stroke-width")).toBe("4")
  })

  it("should update svg attributes when there are props passed to the filled version of component", () => {
    const { container } = render(IconAccessibleFilled, {
      props: {
        size: 48,
        color: "red"
      },
    })
    const svg = container.getElementsByTagName("svg")[0]

    expect(svg.getAttribute("width")).toBe("48")
    expect(svg.getAttribute("fill")).toBe("red")
    expect(svg.getAttribute("stroke")).toBe("none")
    expect(svg.getAttribute("stroke-width")).toBe(null)
  })

  it('should add title child element to svg when title prop is passed', () => {
    const { container } = render(IconAccessible, {
      props: {
        title: 'Test Title',
      }
    })

    const svg = container.getElementsByTagName("svg")[0]
    const title = container.getElementsByTagName("title")[0]

    expect(title).toHaveTextContent('Test Title')
    expect(svg).toContainElement(title)
  })

  it('should call the onClick event', async () => {
    const onClick = vi.fn()
    const { container } = render(IconAccessible, {
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
    const { getByText, container } = render(IconAccessible, {
      slots: {
        default: template
      }
    })

    const textElement = getByText(testText)

    expect(textElement).toBeInTheDocument()
    expect(container.innerHTML).toMatchInlineSnapshot(`"<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-accessible"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1"></path><circle cx="12" cy="7.5" r=".5" fill="currentColor"></circle><text>Hello World</text></svg>"`);
  });

  it("should match snapshot", () => {
    const { container } = render(IconAccessible);
    expect(container.innerHTML).toMatchInlineSnapshot(`"<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-accessible"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1"></path><circle cx="12" cy="7.5" r=".5" fill="currentColor"></circle></svg>"`)
  })
})
