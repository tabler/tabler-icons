import { render } from "@testing-library/vue"
import { Icon2fa } from "./src/icons.js"

describe("Vue Icon component", () => {
  test("should render icon component", () => {
    const { container } = render(Icon2fa)
    expect(container.getElementsByTagName("svg").length).toBeGreaterThan(0);
  })

  test("should update svg attributes when there are props passed to the component", () => {
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

  test("should match snapshot", () => {
    const { container } = render(Icon2fa);
    expect(container.innerHTML).toMatchInlineSnapshot(`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-2fa">
        <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54m7 6.2v-8h4m-4 4l3 0m4 4v-6a2 2 0 0 1 4 0v6m-4 -3l4 0"></path>
      </svg>
    `)
  })
})
