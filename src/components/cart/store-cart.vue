<style lang="scss">
  @import 'store-cart';
</style>

<template>
  <div class="store-cart relative">
    <div class="store-cart-icon pointer" @click="showCartDetails = !showCartDetails;setStatusCart(showCartDetails)">
      <div v-if="getCartQtd" class="cart-label-qtd flex-around-center text-white">{{getCartQtd}}</div>
      <img src="/images/icons/cart/shopping-cart.png" :alt="langTitles.shoppingCart">
    </div>
    <transition name="fade">
      <div class="store-cart-details" v-show="showCartDetails" @mouseleave="showCartDetails = !showCartDetails">
        <ul class="cart-details-list scrolled scrolled-y unstyled-list" v-show="cart.products.length">
          <li class="cart-details-item" v-for="(item, index) in cart.products" :key="item.id">
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
            <div class="item-price flex-evenly-column align-right relative" :data-qtd="`x ${item.qtd}`">
              {{`${currency} ${(item.qtd * item.prices[0].price).toFixed(2)}`}}
            </div>
          </li>
        </ul>
        <div class="cart-details-list--empty align-center" v-show="!cart.products.length">
          {{langTitles.cartEmpty}}
        </div>
        <div class="cart-details-subtotal text-uppercase align-center" v-show="cart.products.length">
          {{`${langTitles.subTotal}: ${currency} ${subtotal}`}}
        </div>
        <div class="cart-button flex-around-center relative">
          <router-link class="btn btn-red btn-sm text-white text-uppercase" :to="{ name: 'checkout'}">
            {{langTitles.proceedToCheckout}}
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  import { mapGetters, mapActions , mapState } from 'vuex';
  import cartHelper from '../../models/helpers/cart-helper';
  import productHelper from '../../models/helpers/product-helper';

  export default {
    name: 'StoreCart',
    data() {
      return {
        langTitles: this.$appConfig.lang.TITLES,
        currency: this.$appConfig.currency,
        showCartDetails: false,
        subtotal: 0,
      }
    },
    computed: {

      // From vuex
      ...mapGetters(['getCartProducts', 'getCartQtd']),
      ...mapState(['cart'])
    },
    methods: {

      // From vuex
      ...mapActions([
        'updateCartQtd',
        'updateCartSubtotal',
        'setStatusCart'
      ]),

      /**
        * when called change cart subtotal values
        *
      */

      sumCartValues() {
        this.subtotal = cartHelper.sum(this.cart.products);
        this.updateCartSubtotal(this.subtotal);
      },

    },
    watch: {

      /**
        * when cart list length is changed
        * cart changed to
        *
      */

      getCartProducts: function() {

        this.updateCartQtd(this.cart.products.length);
        this.sumCartValues();
      }
    },
    created() {

      // when component is initialized call this functions
      this.updateCartQtd(this.cart.products.length);
      this.sumCartValues();
      this.setStatusCart(false);
    },
    filters: {

      cropProductName: name => cartHelper.cropName(name),
      inverseCreator: name => productHelper.inverseCreator(name),
    }
  }
</script>
