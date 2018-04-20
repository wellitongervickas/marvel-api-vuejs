'use strict';

const productsFilterHelper = (() => {

  function getFilters(list) {

    // Create objecto to return
    let availablesFilters = {
      characters: [],
      series: [],
      creators: [],
    };

    for (let i in list) {

      let product = list[i];

      if (product.characters && product.characters.available > 0) {

        let allCharacters = product.characters.items.map(item => item.name);

        // Get unique names
        availablesFilters.characters = [...new Set(availablesFilters.characters.concat(allCharacters))]
      }

      if (product.creators && product.creators.available > 0) {

        let allCreators = product.creators.items.map(item => item.name);

        // Get unique names
        availablesFilters.creators = [...new Set(availablesFilters.creators.concat(allCreators))]
      }

      if (product.series) {

        availablesFilters.series.push(product.series.name)
      }
    }

    return availablesFilters;
  }

  return {
    getFilters
  };
})();

export default productsFilterHelper;
