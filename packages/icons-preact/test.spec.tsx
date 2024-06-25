import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/preact'
import { IconAccessible, IconAccessibleFilled } from "./src/tabler-icons-preact"

describe("Preact Icon component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render icon component", () => {
    const { container } = render(<IconAccessible/>)
    expect(container.getElementsByTagName("svg").length).toBeGreaterThan(0)
  })

  it("should update svg attributes when there are props passed to the component", () => {
    const { container } = render(<IconAccessible size={48} color={"red"} stroke={4}/>)
    const svg = container.getElementsByTagName("svg")[0]

    expect(svg.getAttribute("width")).toBe("48")
    expect(svg.getAttribute("fill")).toBe("none")
    expect(svg.getAttribute("stroke")).toBe("red")
    expect(svg.getAttribute("stroke-width")).toBe("4")
  })

  it("should update svg attributes when there are props passed to the filled version of component", () => {
    const { container } = render(<IconAccessibleFilled size={48} color={"red"}/>)
    const svg = container.getElementsByTagName("svg")[0]

    expect(svg.getAttribute("width")).toBe("48")
    expect(svg.getAttribute("fill")).toBe("red")
    expect(svg.getAttribute("stroke")).toBe("none")
    expect(svg.getAttribute("stroke-width")).toBe(null)
  })

  it('should apply all classNames to the element', () => {
    const testClass = 'test-class';
    const { container } = render(
      <IconAccessible className={testClass} />,
    );

    expect(container.firstChild).toHaveClass(testClass);
    expect(container.firstChild).toHaveClass('tabler-icon');
    expect(container.firstChild).toHaveClass('tabler-icon-accessible');
  });

  it('should add a style attribute to the element', () => {
    const { container } = render(<IconAccessible style={{ color: "red" }}/>)

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg).toHaveStyle('color: rgb(255, 0, 0)')
  })

  it('should add a title element to the svg', () => {
    const { container } = render(<IconAccessible title="Accessible Icon"/>)
    const svg = container.getElementsByTagName("svg")[0]
    const title = container.getElementsByTagName("title")[0]

    expect(svg.getAttribute("title")).toBe("Accessible Icon");
    expect(title).toHaveTextContent("Accessible Icon");
  })

  it("should match snapshot", () => {
    const { container } = render(<IconAccessible/>)
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
           class="tabler-icon tabler-icon-accessible "
      >
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0">
        </path>
        <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1">
        </path>
        <circle cx="12"
                cy="7.5"
                r=".5"
                fill="currentColor"
        >
        </circle>
      </svg>
    `)
  })
})
