import { describe, it, expect } from 'vitest'
import Preact from 'preact'
import { render } from "@testing-library/preact"
import { IconActivity } from "@tabler/icons-preact"

describe("Preact Icon component", () => {
  it("should render an component", () => {
    const { container } = render(<IconActivity />);

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"tabler-icon tabler-icon-IconActivity\\"><path d=\\"M3 12h4l3 8l4 -16l3 8h4\\"></path></svg>"`
    );
  });

  it("should adjust the size, stroke color and stroke width", () => {
    const testId = "icon";
    const { container, getByTestId } = render(
      <IconActivity
        data-testid={testId}
        size={48}
        color="red"
        stroke={4}
        className={"icon-class"}
      />
    );

    const { attributes } = getByTestId(testId);
    expect(attributes.stroke.value).toBe("red");
    expect(attributes.width.value).toBe("48");
    expect(attributes.height.value).toBe("48");
    expect(attributes["stroke-width"].value).toBe("4");

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"48\\" height=\\"48\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"red\\" stroke-width=\\"4\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"icon-class\\" data-testid=\\"icon\\"><path d=\\"M3 12h4l3 8l4 -16l3 8h4\\"></path></svg>"`
    );
  });
});
