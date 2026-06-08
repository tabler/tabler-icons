import { render } from '@ember/test-helpers';
import IconAccessibleDirect from '@tabler/icons-ember/icons/IconAccessible';
import {
  IconAccessible,
  IconAccessibleFilled,
  IconCodeAsterix,
  dynamicImports,
} from '@tabler/icons-ember';
import { module, test } from 'qunit';

import { setupRenderingTest } from 'test-ember/tests/helpers';

const renderedSvg = () => document.querySelector('#ember-testing svg') as SVGSVGElement;

module('Ember Icon component', function (hooks) {
  setupRenderingTest(hooks);

  test('should render icon component', async function (assert) {
    await render(<template><IconAccessible /></template>);

    assert.dom('svg').exists({ count: 1 });
    assert.dom('svg path').exists({ count: 3 });
    assert.dom('svg path[fill="currentColor"]').exists({ count: 1 });
  });

  test('should update svg attributes when there are args passed to the component', async function (assert) {
    await render(<template><IconAccessible @size={{48}} @color="red" @stroke={{4}} /></template>);

    const svg = renderedSvg();

    assert.strictEqual(svg.getAttribute('width'), '48');
    assert.strictEqual(svg.getAttribute('height'), '48');
    assert.strictEqual(svg.getAttribute('stroke'), 'red');
    assert.strictEqual(svg.getAttribute('stroke-width'), '4');
    assert.strictEqual(svg.getAttribute('fill'), 'none');
  });

  test('should update svg attributes when there are args passed to the filled version of component', async function (assert) {
    await render(<template><IconAccessibleFilled @size={{48}} @color="red" /></template>);

    const svg = renderedSvg();

    assert.strictEqual(svg.getAttribute('width'), '48');
    assert.strictEqual(svg.getAttribute('height'), '48');
    assert.strictEqual(svg.getAttribute('fill'), 'red');
    assert.strictEqual(svg.getAttribute('stroke'), 'none');
    assert.strictEqual(svg.getAttribute('stroke-width'), null);
  });

  test('should apply all classes to the element', async function (assert) {
    await render(<template><IconAccessible class="test-class" /></template>);

    assert.dom('svg').hasClass('test-class');
    assert.dom('svg').hasClass('tabler-icon');
    assert.dom('svg').hasClass('tabler-icon-accessible');
  });

  test('should add a style attribute to the element', async function (assert) {
    await render(<template><IconAccessible style="color: red" /></template>);

    const svg = renderedSvg();

    assert.ok(svg.getAttribute('style')?.includes('color: red'));
  });

  test('should add title child element to svg when title arg is passed', async function (assert) {
    await render(<template><IconAccessible @title="Accessible Icon" /></template>);

    assert.dom('svg title').hasText('Accessible Icon');
  });

  test('should pass children to the icon block', async function (assert) {
    await render(<template><IconAccessible><desc>Accessible description</desc></IconAccessible></template>);

    assert.dom('svg desc').hasText('Accessible description');
  });

  test('should support direct subpath imports', async function (assert) {
    await render(<template><IconAccessibleDirect data-test-direct-icon /></template>);

    assert.dom('[data-test-direct-icon]').exists({ count: 1 });
    assert.dom('svg').hasClass('tabler-icon-accessible');
  });

  test('should support alias exports', async function (assert) {
    await render(<template><IconCodeAsterix /></template>);

    assert.dom('svg').hasClass('tabler-icon-code-asterisk');
  });

  test('should support dynamic imports', async function (assert) {
    const IconAd = (await dynamicImports.ad()).default;

    await render(<template><IconAd data-test-dynamic-icon /></template>);

    assert.dom('[data-test-dynamic-icon]').exists({ count: 1 });
    assert.dom('svg').hasClass('tabler-icon-ad');
  });
});
