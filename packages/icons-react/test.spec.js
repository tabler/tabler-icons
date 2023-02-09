import { render } from "@testing-library/react"
import { Icon2fa } from "./src/icons.js"
import React from "react"
import renderer from 'react-test-renderer'

describe("React Icon component", () => {
  test("should render icon component", () => {
    const { container } = render(<Icon2fa/>)
    expect(container.getElementsByTagName("svg").length).toBeGreaterThan(0)
  })

  test("should update svg attributes when there are props passed to the component", () => {
    const { container } = render(<Icon2fa size={48} color={"red"} strokeWidth={4}/>)

    const svg = container.getElementsByTagName("svg")[0]

    expect(svg.getAttribute("width")).toBe("48")
    expect(svg.getAttribute("stroke")).toBe("red")
    expect(svg.getAttribute("stroke-width")).toBe("4")
  })

  // Jest creates separate file to store snapshots
  test("should match snapshot", () => {
    const icon = renderer.create(<Icon2fa/>).toJSON()
    expect(icon).toMatchSnapshot()
  })
})
