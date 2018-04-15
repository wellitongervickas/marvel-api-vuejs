'use strict';

import cartHelper from '../../../models/helpers/cart-helper';

export default {

  ADD_TO_CART(state, payload) {

    // Save in storage
    cartHelper.save(payload);

    // Get saved itens
    const products = cartHelper.get();

    // Save in vuex
    state.products = products;
  },
  UPDATE_CART_QTD(state, payload) {
    state.qtd = payload;
  },
  UPDATE_CART_SUBTOTAL(state, payload) {
    state.subtotal = payload;
  }
}
