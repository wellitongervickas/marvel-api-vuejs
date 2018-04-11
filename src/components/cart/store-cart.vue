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
        <ul class="unstyled-list">
          <li class="cart-details-item" v-for="(item, index) in getCartProducts">
            <div class="item-title">{{item.title | cropProductName}}</div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>

  import { mapGetters  } from 'vuex';
  import cartHelper from '../../models/helpers/cart-helper'

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
    },
    filters: {
      cropProductName(name) {
        return cartHelper.cropName(name)
      }
    }
  }
</script>
