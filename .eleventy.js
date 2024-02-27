const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addWatchTarget("./src");
  eleventyConfig.addWatchTarget("./icons");

  eleventyConfig.setQuietMode(true);

  eleventyConfig.addLiquidTag("include_cached", function (liquidEngine) {
    return {
      parse: function (tagToken, remainingTokens) {
        this.str = tagToken.args;
      },
      render: async function (scope, hash) {
        var str = await this.liquid.evalValue(this.str, scope);
        return str;
      }
    };
  });

  eleventyConfig.addFilter("group_by", function (value) {
    return value
  });

  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      layouts: "_layouts",
      includes: "_includes"
    },
  };
};
