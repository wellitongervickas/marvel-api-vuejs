'use-strict'

import storageHelper from '../../../models/helpers/storage-helper';

export default {

  /**
    * This method will get a data (array of object) in memory
    * using vuex and return a list of products
    *
  */

  getProdutsFromLocal: state => state.productsList
}
