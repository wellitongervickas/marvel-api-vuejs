'use strict';

import storageHelper from './storage-helper';

const checkoutHelper = (() => {

  function updateProductQtd(list, product) {
    let newList = list.map(item => {
      if (item.id == product.id) {

        item.qtd = product.qtd;
        return item;
      }
    });

    storageHelper.save('cartProducts', newList);
    return newList;
  }

  return {
    updateProductQtd
  }

})();

export default checkoutHelper;
