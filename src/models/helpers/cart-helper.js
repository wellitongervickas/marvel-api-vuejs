'use-strict';

import storageHelper from './storage-helper'

const cartHelper = (() => {

  /**
    * This function will add an attribute to the product
    * object by counting how many times it has been repeated
    *
  */

  function concatenateProducts (list) {

    // Get unique item of list
    let tmpList = [];
    for (let i in list) {

      let product = list[i];
      product.qtd = 1;

      let exist = tmpList.filter(item => {

        if (item.id == product.id) {
          return product;
        }
      });

      if (!exist.length) {

        tmpList.push(product);
      }
    };

    // Get product quantity
    for (let i in tmpList) {

      tmpList[i].qtd = 1;

      // Iterate in array for sum equal items
      let repeated = list.filter(item => item.id == tmpList[i].id);

      // Change quantity
      tmpList[i].qtd = repeated.length;
    }

    return tmpList;
  };

  /**
    * This function will add the first values
    * ​​of the product and mend a total
    *
  */

  function sumCartValues(list) {

    let price = 0;
    for (let i in list) {
      let prices = list[i].prices;
      price += (prices[0].price * list[i].qtd);
    }

    return price.toFixed(2);
  };

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
    concat: concatenateProducts,
    sum: sumCartValues,
    save: saveProductsInStorage,
    get: getProductsFromStorage
  };

})();

export default cartHelper;
