const config = require('../../babel.config');

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        // No need for babel to resolve modules
        modules: false,
        targets: {
          // ! Very important. Target es6+
          esmodules: true,
        },
      },
    ],
  ],
  env: config.env,
};
