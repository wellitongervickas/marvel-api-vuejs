'use strict';

import cartHelper from '../../../models/helpers/cart-helper';
import checkoutHelper from '../../../models/helpers/checkout-helper';

export default {

  ADD_TO_CART(state, payload) {

    cartHelper.save(payload);
    state.products = cartHelper.get();
  },

  UPDATE_CART_QTD(state, payload) {

    state.qtd = payload;
  },

  UPDATE_CART_SUBTOTAL(state, payload) {

    state.subtotal = payload;
  },

  DELETE_PRODUCT(state, payload) {

    let updatedList = cartHelper.delete(state.products, payload);
    state.products = cartHelper.updateList(updatedList);
  },

  UPDATE_PRODUCT_QUANTITY(state, payload) {
    state.products = checkoutHelper.updateProductQtd(state.products, payload);
  },

  SET_STATUS(state, payload) {
    state.show = payload;
  }
}
