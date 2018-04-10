'use-strict';

import cartHelper from '../../../models/helpers/cart-helper';

export default {

  ADD_TO_CART( state, payload) {

    // Save in storage
    cartHelper.save(payload);

    // Save in vuex
    state.products.push(payload);
  },

  REMOVE_FROM_CART( state, payload) {

  },

  UPDATE_CART( state, payload) {

  },
}
