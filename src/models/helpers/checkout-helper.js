'use strict';

import storageHelper from './storage-helper';

const checkoutHelper = (() => {

  /**
    * When called this function a product get new quantity
    * and return a new list updated
    *
  */

  function updateProductQtd(list, product) {
    let newList = list.map(item => {
      if (item.id == product.id) {

        item.qtd = product.qtd;
        return item;
      }

      return item;
    });

    storageHelper.save('cartProducts', newList);
    return newList;
  }

  return {
    updateProductQtd
  }

})();

export default checkoutHelper;
