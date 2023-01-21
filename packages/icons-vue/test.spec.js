import { render, fireEvent } from "@testing-library/vue";
import { IconActivity } from "./";

describe("Vue Icon component", () => {
  it("should render an component", () => {
    const { container } = render(IconActivity);
    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"tabler-icon tabler-icon-activity\\"><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\"></path><path d=\\"M3 12h4l3 8l4 -16l3 8h4\\"></path></svg>"`
    );
  });

  it("should adjust the size, stroke color and stroke width", () => {
    const { container } = render(IconActivity, {
      props: {
        size: 48,
        color: "red",
        "stroke-width": 4,
      },
    });

    const [icon] = container.getElementsByTagName('svg')

    expect(icon.getAttribute("width")).toBe("48");
    expect(icon.getAttribute("stroke")).toBe("red");
    expect(icon.getAttribute("stroke-width")).toBe("4");

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"48\\" height=\\"48\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"red\\" stroke-width=\\"4\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" size=\\"48\\" color=\\"red\\" class=\\"tabler-icon tabler-icon-activity\\"><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\"></path><path d=\\"M3 12h4l3 8l4 -16l3 8h4\\"></path></svg>"`
    );
  });

  it("should add a class to the element", () => {
    const { container } = render(IconActivity, {
      attrs: {
        class: "my-icon",
      },
    });

    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24\\" height=\\"24\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" class=\\"my-icon\\"><path stroke=\\"none\\" d=\\"M0 0h24v24H0z\\" fill=\\"none\\"></path><path d=\\"M3 12h4l3 8l4 -16l3 8h4\\"></path></svg>"`
    );

    const [icon] = container.getElementsByTagName('svg')

    expect(icon.getAttribute("class")).toBe("my-icon");
  });

  it("should add a style attribute to the element", () => {
    const { container } = render(IconActivity, {
      attrs: {
        style: "position: absolute",
      },
    });

    expect(container).toMatchInlineSnapshot(`
      <div>
        <svg
          class="tabler-icon tabler-icon-activity"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          style="position: absolute;"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0h24v24H0z"
            fill="none"
            stroke="none"
          />
          <path
            d="M3 12h4l3 8l4 -16l3 8h4"
          />
        </svg>
      </div>
    `);

    const [icon] = container.getElementsByTagName('svg')

    expect(icon.getAttribute("style")).toBe("position: absolute;");
  });

  it("should call the onClick event", async () => {
    const onClick = jest.fn();
    const { container } = render(IconActivity, {
      attrs: {
        onClick,
      },
    });

    const [icon] = container.getElementsByClassName("tabler-icon");

    await fireEvent.click(icon);

    expect(onClick).toHaveBeenCalled();
  });
});
