<style lang="scss">
  @import 'store-cart';
</style>

<template>
  <div class="store-cart relative">
    <div class="store-cart-icon pointer" @click="showCartDetails = !showCartDetails">
      <img src="/images/icons/cart/shopping-cart.png">
    </div>
    <transition name="fade">
      <div class="store-cart-details" v-show="showCartDetails">
        <div class="cart-details-item" v-for="(item, index) in getCartProducts">
          {{item.title}}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  import { mapGetters  } from 'vuex';

  export default {
    name: 'StoreCart',
    data() {
      return {
        showCartDetails: false
      }
    },
    computed: {
      ...mapGetters([
        'getCartProducts'
      ])
    }
  }
</script>
