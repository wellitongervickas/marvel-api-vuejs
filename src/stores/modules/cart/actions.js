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

  updateCartQtd(context, payload) {
    context.commit('UPDATE_CART_QTD', payload);
  }

}
