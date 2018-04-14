<style lang="scss">
  @import 'store-checkout-details';
</style>

<template>
  <div class="store-checkout-details container">
    <div class="checkout-details-header flex-between-center">
      <div class="details-header-title flex">
        <img src="/images/icons/cart/shopping-cart.png" :alt="shoppingCart">
        <h1 class="text-red text-uppercase">{{shoppingCart}}</h1>
      </div>
      <div class="details-header-keepshopping">
        <router-link class="default-btn" to="/">
          {{keepShopping}}
        </router-link>
      </div>
    </div>
    <div class="checkout-details-body">
      #
    </div>
    <div class="checkout-details-footer flex-end">
      <button type="button" class="btn btn-red text-white">{{proceedToCheckout}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StoreCheckoutDetails',
    data() {
      return {
        proceedToCheckout: this.$appConfig.lang.TITLES.proceedToCheckout,
        shoppingCart: this.$appConfig.lang.TITLES.shoppingCart,
        keepShopping: this.$appConfig.lang.TITLES.keepShopping,
      }
    },
  }
</script>
