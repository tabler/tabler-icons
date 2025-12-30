const sass = require("sass");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("scss");
  
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent, inputPath) {
      const parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }
      
      const result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || ".", path.join(process.cwd(), "src", "_includes")],
        style: "expanded"
      });
      
      return async (data) => {
        return result.css;
      };
    }
  });

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

