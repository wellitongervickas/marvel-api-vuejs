<style lang="scss">
  @import 'store-cart';
</style>

<template>
  <div class="store-cart relative">
    <div class="store-cart-icon pointer" @click="showCartDetails = !showCartDetails">
      <div v-if="getCartQtd" class="cart-label-qtd flex-around-center text-white">{{getCartQtd}}</div>
      <img src="/images/icons/cart/shopping-cart.png" :alt="shoppingCart">
    </div>
    <transition name="fade">
      <div class="store-cart-details" v-show="showCartDetails">
        <ul class="cart-details-list scrolled scrolled-y unstyled-list" v-show="productsList.length">
          <li class="cart-details-item" v-for="(item, index) in productsList" :key="item.id">
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
        <div class="cart-details-list--empty align-center" v-show="!productsList.length">
          {{cartEmpty}}
        </div>
        <div class="cart-details-subtotal text-uppercase align-center" v-show="productsList.length">
          {{`${subTotalTitle}: ${currency} ${subtotal}`}}
        </div>
        <div class="cart-button flex-around-center relative">
          <router-link class="btn btn-red btn-sm text-white text-uppercase" :to="{ name: 'checkout'}">
            {{proceedToCheckout}}
          </router-link>
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
        proceedToCheckout: this.$appConfig.lang.TITLES.proceedToCheckout,
        shoppingCart: this.$appConfig.lang.TITLES.shoppingCart,
        cartEmpty: this.$appConfig.lang.TITLES.cartEmpty,
        currency: this.$appConfig.currency,
        showCartDetails: false,
        productsList: [],
        subtotal: 0,
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
        'updateCartQtd',
        'updateCartSubtotal'
      ]),

      /**
        * when called concatenate repeated product
        *
      */

      concatenateProducts() {
        this.productsList = cartHelper.concat(this.getCartProducts);
      },

      /**
        * when called change cart subtotal values
        *
      */

      sumCartValues() {
        this.subtotal = cartHelper.sum(this.productsList);
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

        this.updateCartQtd(this.getCartProducts.length);
        this.concatenateProducts();
        this.sumCartValues();
      }
    },
    created() {

      this.updateCartQtd(this.getCartProducts.length);
      this.concatenateProducts();
      this.sumCartValues();
    },
    filters: {

      cropProductName: name => cartHelper.cropName(name),
      inverseCreator: name => productHelper.inverseCreator(name),
    }
  }
</script>
