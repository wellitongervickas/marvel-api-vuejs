'use-strict';

import storageHelper from './storage-helper'

const cartHelper = (() => {

  function saveProductsInStorage (payload) {

    let productList = [];
    let productsFromStorage = getProductsFromStorage();

    productList.push(payload);

    if (productsFromStorage.length) {
      productList = productList.concat(productsFromStorage);
    }

    storageHelper.save('cartProducts', productList);
  };

  function getProductsFromStorage () {
    return storageHelper.get('cartProducts');
  };

  return {
    save: saveProductsInStorage,
    get: getProductsFromStorage
  };

})();

export default cartHelper;
