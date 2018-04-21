'use strict';

import listChangesUtils from '../utils/list-changes-utils';

const productsFilterHelper = (() => {

  /**
    * This function return filtered creators,
    * characters and series of all products in the list
    *
  */

  function getFilters(list) {

    let tmpSeries = [];

    // Create objecto to return
    let availablesFilters = {
      characters: [],
      series: [],
      creators: [],
    };

    for (let i in list) {

      let product = list[i];

      if (product.characters && product.characters.available > 0) {

        let allCharacters = listChangesUtils.appendStatusProperty(product.characters.items);

        // Get unique names
        availablesFilters.characters = [...new Set(availablesFilters.characters.concat(allCharacters))]
      }

      if (product.creators && product.creators.available > 0) {

        let allCreators = listChangesUtils.appendStatusProperty(product.creators.items);

        // Get unique names
        availablesFilters.creators = [...new Set(availablesFilters.creators.concat(allCreators))]
      }

      if (product.series) {

        tmpSeries.push(product.series);
        availablesFilters.series = listChangesUtils.appendStatusProperty(tmpSeries);

      }
    }

    return availablesFilters;
  }

  return {
    getFilters
  };
})();

export default productsFilterHelper;
