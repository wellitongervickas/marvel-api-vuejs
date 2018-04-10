'use-strict'

import cartHelper from '../../../models/helpers/cart-helper';

export default {
  getCartProducts(state) {

    if (state.products.length == 0) {
      return cartHelper.get();
    }

    return state.products
  }
}
