'use-strict'

import storageHelper from '../../../models/helpers/storage-helper';

export default {
  saveProducts(context, payload) {

    storageHelper.save('products', payload);
    context.commit('SAVE_PRODUCTS', payload)
  }
}
