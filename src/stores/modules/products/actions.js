'use-strict'

import storageHelper from '../../../models/helpers/storage-helper';

export default {

  /**
    * This method will save a data (array of objects) in memory
    * using vuex passing a payload
    *
  */

  saveProducts(context, payload) {
    context.commit('SAVE_PRODUCTS', payload)
  }
}
