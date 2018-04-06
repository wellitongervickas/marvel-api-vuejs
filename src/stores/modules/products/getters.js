'use-strict'

import storageHelper from '../../../models/helpers/storage-helper';

export default {
  getProdutsFromLocal(state) {

    // console.log('called');

    // // Verify if products is saved in storage before try return from vuex
    // const getFromStorage = storageHelper.get('products');

    // if (getFromStorage.length > 1) {
    //   return getFromStorage;
    // }

    return state.productsList;
  }
}
