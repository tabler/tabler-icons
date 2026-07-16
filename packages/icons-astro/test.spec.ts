import { describe, it, expect, beforeAll } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { IconAccessible, IconAccessibleFilled } from './src/tabler-icons-astro';

describe('Astro Icon component', () => {
  let container: Awaited<ReturnType<typeof AstroContainer.create>>;

  beforeAll(async () => {
    container = await AstroContainer.create();
  });

  const openingTag = (html: string) => html.slice(0, html.indexOf('>') + 1);

  it('should render an svg element', async () => {
    const html = await container.renderToString(IconAccessible as any);
    expect(html).toContain('<svg');
    expect(html).toContain('</svg>');
  });

  it('should apply default attributes', async () => {
    const tag = openingTag(await container.renderToString(IconAccessible as any));
    expect(tag).toContain('width="24"');
    expect(tag).toContain('height="24"');
    expect(tag).toContain('stroke="currentColor"');
    expect(tag).toContain('stroke-width="2"');
    expect(tag).toContain('class="tabler-icon tabler-icon-accessible"');
  });

  it('should update svg attributes from props', async () => {
    const tag = openingTag(
      await container.renderToString(IconAccessible as any, {
        props: { size: 48, color: 'red', stroke: 4 },
      }),
    );
    expect(tag).toContain('width="48"');
    expect(tag).toContain('height="48"');
    expect(tag).toContain('stroke="red"');
    expect(tag).toContain('stroke-width="4"');
  });

  it('should render the filled variant', async () => {
    const tag = openingTag(
      await container.renderToString(IconAccessibleFilled as any, {
        props: { size: 48, color: 'red' },
      }),
    );
    expect(tag).toContain('width="48"');
    expect(tag).toContain('fill="red"');
    expect(tag).toContain('stroke="none"');
    expect(tag).not.toContain('stroke-width');
  });

  it('should append a custom class', async () => {
    const tag = openingTag(
      await container.renderToString(IconAccessible as any, {
        props: { class: 'test-class' },
      }),
    );
    expect(tag).toContain('class="tabler-icon tabler-icon-accessible test-class"');
  });

  it('should render a title element', async () => {
    const html = await container.renderToString(IconAccessible as any, {
      props: { title: 'Accessible icon' },
    });
    expect(html).toContain('<title>Accessible icon</title>');
  });
});
