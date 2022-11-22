const config = require('../../babel.config');

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: false,
      },
    ],
  ],
  env: {
    ...config.env,
    test: {
      presets: ['react-app'],
    },
  },
};
