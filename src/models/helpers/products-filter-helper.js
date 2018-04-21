'use strict';

import listChangesUtils from '../utils/list-changes-utils';
import listUtils from '../utils/list-utils';

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
        availablesFilters.characters = availablesFilters.characters.concat(allCharacters);
        availablesFilters.characters = listUtils.uniqueValuesObject(availablesFilters.characters);
      }

      if (product.creators && product.creators.available > 0) {

        let allCreators = listChangesUtils.appendStatusProperty(product.creators.items);
        availablesFilters.creators = availablesFilters.creators.concat(allCreators);
        availablesFilters.creators = listUtils.uniqueValuesObject(availablesFilters.creators);
      }

      if (product.series) {

        tmpSeries.push(product.series);
        tmpSeries = listChangesUtils.appendStatusProperty(tmpSeries);
        availablesFilters.series = listUtils.uniqueValuesObject(tmpSeries);

      }
    }

    return availablesFilters;
  }

  return {
    getFilters
  };
})();

export default productsFilterHelper;
