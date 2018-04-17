'use strict';

import cartHelper from '../../../models/helpers/cart-helper';

export default {
  getCartProducts(state) {

    if (state.products.length == 0) {
      return cartHelper.get();
    }

    return state.products;
  },

  getCartQtd(state) {
    return state.qtd;
  },

  getCartSubtotal(state) {
    return state.subtotal;
  },

  getStatusCart(state) {
    return state.show;
  }
}
