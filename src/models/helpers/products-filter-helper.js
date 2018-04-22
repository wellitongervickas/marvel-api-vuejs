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
    let availableFilters = {
      characters: [],
      series: [],
      creators: [],
    };

    for (let i in list) {

      let product = list[i];
      if (product.characters && product.characters.available > 0) {

        let allCharacters = listChangesUtils.appendStatusProperty(product.characters.items);
        availableFilters.characters = listUtils.concatUniqueValuesObject(availableFilters.characters, allCharacters);
      }

      if (product.creators && product.creators.available > 0) {

        let allCreators = listChangesUtils.appendStatusProperty(product.creators.items);
        availableFilters.creators = listUtils.concatUniqueValuesObject(availableFilters.creators, allCreators);
      }

      if (product.series) {

        tmpSeries.push(product.series);
        tmpSeries = listChangesUtils.appendStatusProperty(tmpSeries);
        availableFilters.series = listUtils.uniqueValuesObject(tmpSeries);

      }
    }

    return availableFilters;
  };

  return {
    getFilters,
  };
})();

export default productsFilterHelper;
