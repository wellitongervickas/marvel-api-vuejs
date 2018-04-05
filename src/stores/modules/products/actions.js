'use-strict'

export default {
  saveProducts(context, payload) {
    context.commit('SAVE_PRODUCTS', payload)
  }
}
