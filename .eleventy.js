module.exports = function(config) {

  config.addLiquidFilter('group_by', () => {})

  config.addCollection('icons', collection =>
      collection.getFilteredByGlob('icons/*.svg')
      .sort((a, b) => {
        console.log('a', a);
        
        return b.date - a.date
      })
  )

  return {
    dir: {
      input: "src",

      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    }
  }

};
