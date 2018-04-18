'use strict';

import storageHelper from './storage-helper';

const cartHelper = (() => {

  /**
    * This function will delete product of
    * list and return a new list to update
    * storage and vuex
  */

  function deleteProduct(list, id) {

    return list.filter(item => item.id != id);
  }

  /**
    * This function will add the first values
    * ​​of the product and mend a total
    *
  */

  function sumCartValues(list) {

    if (list) {
      let price = 0;
      for (let i in list) {

        let prices = list[i].prices;
        if (prices) {
          price += (prices[0].price * list[i].qtd);
        }
      }

      return price.toFixed(2);
    }
  };

  /*
    * This function is responsible for decreasing the
    * size of the product title in the store cart.
    *
  */

  function cropName (name) {

    if (name) {

      const maxLength = 20;
      if (name.length >= maxLength) {
        return `${name.substring(0, maxLength)} ...`;
      }

      return name;
    }

    return;
  };

  /**
    * This function will update product list in storage
    *
  */

  function updateProductsInStorage(list) {

    storageHelper.save('cartProducts', list);
    return storageHelper.get('cartProducts');
  };


  /**
    * This method is responsible for saving the new products
    * that are being sent to the cart and if there is any saved
    * in the storage it will concatenate.
    *
  */

  function saveProductsInStorage (product) {

    let productsFromStorage = getProductsFromStorage();
    let existOnList = productsFromStorage.find(item => item.id == product.id);

    if (existOnList) {
      for (let i in productsFromStorage) {
        if (productsFromStorage[i].id == product.id) {
          productsFromStorage[i].qtd += 1;
          break;
        }
      }
    } else {

      productsFromStorage.push(product);
    }

    storageHelper.save('cartProducts', productsFromStorage);
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
    delete: deleteProduct,
    sum: sumCartValues,
    save: saveProductsInStorage,
    updateList: updateProductsInStorage,
    get: getProductsFromStorage
  };

})();

export default cartHelper;
