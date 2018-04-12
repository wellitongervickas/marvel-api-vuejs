'use-strict';

import storageHelper from './storage-helper'

const cartHelper = (() => {

  /*
    * This function is responsible for decreasing the
    * size of the product title in the store cart.
    *
  */

  function cropName (name) {
    const maxLength = 20;

    if (name.length >= maxLength) {

      return `${name.substring(0, maxLength)} ...`;
    } else {

      return name;
    }
  };

  /**
    * This method is responsible for saving the new products
    * that are being sent to the cart and if there is any saved
    * in the storage it will concatenate.
    *
  */

  function saveProductsInStorage (payload) {

    let productList = [];
    let productsFromStorage = getProductsFromStorage();

    productList.push(payload);

    if (productsFromStorage.length) {
      productList = productList.concat(productsFromStorage);
    }

    storageHelper.save('cartProducts', productList);
  };

  /**
    * This method only returns the values ​​that are in the storage
    *
  */

  function getProductsFromStorage () {
    return storageHelper.get('cartProducts');
  };

  return {
    cropName,
    save: saveProductsInStorage,
    get: getProductsFromStorage
  };

})();

export default cartHelper;
