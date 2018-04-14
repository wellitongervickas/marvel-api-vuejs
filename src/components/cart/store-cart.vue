<style lang="scss">
  @import 'store-cart';
</style>

<template>
  <div class="store-cart relative">
    <div class="store-cart-icon pointer" @click="showCartDetails = !showCartDetails">
      <div v-if="getCartQtd" class="cart-label-qtd flex-around-center text-white">{{getCartQtd}}</div>
      <img src="/images/icons/cart/shopping-cart.png">
    </div>
    <transition name="fade">
      <div class="store-cart-details" v-show="showCartDetails">
        <ul class="cart-details-list scrolled scrolled-y unstyled-list">
          <li class="cart-details-item" v-for="(item, index) in getCartProducts">
            <div class="item-image">
              <router-link :to="{ name: 'product', params: { id: item.id }}">
                <img :src="item.image" :alt="item.title">
              </router-link>
            </div>
            <div class="item-description flex-evenly-column">
              <div class="item-description-title">
                <router-link :to="{ name: 'product', params: { id: item.id }}">
                  <h3>{{item.title | cropProductName}}</h3>
                </router-link>
              </div>
              <div v-if="item.creator" class="item-description-autor text-uppercase">{{item.creator | inverseCreator}}</div>
            </div>
            <div class="item-price flex-evenly-column">$ {{item.prices[0].price}}</div>
          </li>
        </ul>
        <div class="cart-details-subtotal text-uppercase align-center">
          {{`${subTotalTitle}: ${currency} ${subTotal}`}}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  import { mapGetters, mapState, mapActions  } from 'vuex';
  import cartHelper from '../../models/helpers/cart-helper';
  import productHelper from '../../models/helpers/product-helper';

  export default {
    name: 'StoreCart',
    data() {
      return {
        subTotalTitle: this.$appConfig.lang.TITLES.subTotal,
        currency: this.$appConfig.currency,
        showCartDetails: false,
        subTotal: 0,
      }
    },
    computed: {

      // From vuex
      ...mapGetters([
        'getCartProducts',
        'getCartQtd'
      ])
    },
    methods: {

      // From vuex
      ...mapActions([
        'updateCartQtd'
      ]),

      /**
        * when called change cart subtotal values
        *
      */

      sumCartValues() {
        this.subTotal = cartHelper.sum(this.getCartProducts);
      }
    },
    watch: {

      /**
        * when cart list length is changed
        * cart quantity get new value
        *
      */

      getCartProducts: function() {
        this.updateCartQtd(this.getCartProducts.length);
        this.sumCartValues();
      }
    },
    created() {
      this.updateCartQtd(this.getCartProducts.length);
      this.sumCartValues();
    },
    filters: {
      cropProductName(name) {
        if (name) return cartHelper.cropName(name)
      },
      inverseCreator(name) {
        if (name) return productHelper.inverseCreator(name);
      }
    }
  }
</script>
