import {
  setupApplicationTest as upstreamSetupApplicationTest,
  setupRenderingTest as upstreamSetupRenderingTest,
  setupTest as upstreamSetupTest,
  type SetupTestOptions,
} from 'ember-qunit';

function setupApplicationTest(hooks: NestedHooks, options?: SetupTestOptions) {
  upstreamSetupApplicationTest(hooks, options);
}

function setupRenderingTest(hooks: NestedHooks, options?: SetupTestOptions) {
  upstreamSetupRenderingTest(hooks, options);
}

function setupTest(hooks: NestedHooks, options?: SetupTestOptions) {
  upstreamSetupTest(hooks, options);
}

export { setupApplicationTest, setupRenderingTest, setupTest };
