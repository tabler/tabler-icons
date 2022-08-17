const sass = require("sass");
const path = require("path");


module.exports = function(eleventyConfig) {

  eleventyConfig.addShortcode("icon", function(name) {
    return name
  });


  eleventyConfig.addLiquidFilter('group_by', () => {
  })

  eleventyConfig.addLiquidFilter('inspect', (i) => {
    console.log('i', i);
  })

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: 'css',
    compile: async function(inputContent) {
      let result = sass.compileString(inputContent);

      return async () => {
        return result.css;
      };
    }
  });

  eleventyConfig.addTemplateFormats("svg");
  eleventyConfig.addExtension("svg", {
    outputFileExtension: 'svg',
    compileOptions: {
      permalink: function(contents, inputPath) {
        const basename = path.basename(inputPath);
        return `icons/${basename}`;
      }
    },
    compile: async (inputContent, inputPath) => {

      return async () => {
        const basename = path.basename(inputPath, '.svg');

        return inputContent.replace('<svg>', `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-${basename}" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>`);
      };
    }
  });

  eleventyConfig.addCollection('icons', collection => {
    return collection.getFilteredByGlob('./src/icons/*.svg').sort((a, b) => {
      return b.name - a.name
    })
  })

  return {
    dynamicPartials: false,
    dir: {
      input: 'src',

      includes: '_includes',
      layouts: '_layouts',
      data: '_data'
    }
  }

}
