'use-strict';

export default {

  /**
    * This method is responsible for
    * saving the products to the cart.
    *
  */

  addTocart(context, payload) {
    context.commit('ADD_TO_CART', payload);
  },

  updateCart(context, payload) {
    context.commit('UPDATE_CART', payload);
  },

  removeFromCart(context, payload) {
    context.commit('REMOVE_FROM_CART', payload);
  },
}
