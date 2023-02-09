// import { render } from "@solidjs/testing-library"
// import { Icon2fa } from "./src/icons.js"

// describe("Solidjs Icon component", () => {
//   test("should render icon component", () => {
//     const { container } = render(<Icon2fa />)
//     expect(container.getElementsByTagName("svg").length).toBeGreaterThan(0);
//   })

//   test("should update svg attributes when there are props passed to the component", () => {
//     const { container } = render(Icon2fa, {
//       props: {
//         size: 48,
//         color: "red",
//         "stroke-width": 4,
//       },
//     })

//     const svg = container.getElementsByTagName("svg")[0]

//     expect(svg.getAttribute("width")).toBe("48")
//     expect(svg.getAttribute("stroke")).toBe("red")
//     expect(svg.getAttribute("stroke-width")).toBe("4")
//   })

//   test("should match snapshot", () => {
//     const { container } = render(<Icon2fa />)
//     expect(container.innerHTML).toMatchInlineSnapshot()
//   })
// })
