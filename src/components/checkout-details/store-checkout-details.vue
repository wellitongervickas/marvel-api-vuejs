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
      <div class="details-body-products">


        <div class="products-list" v-show="productsList.length">
          <div class="products-item" v-for="(item, index) in productsList">
            <div class="item-info flex">
              <div class="info-image">
                <router-link :to="{ name: 'product', params: { id: item.id }}">
                  <img :src="item.image" :alt="item.title">
                </router-link>
              </div>
              <div class="info-title flex-around-center">
                <router-link :to="{ name: 'product', params: { id: item.id }}">
                  <h3>{{item.title | cropProductName}}</h3>
                  <span class="products-item-title-creator text-uppercase" v-if="item.creator">{{item.creator | inverseCreator}}</span>
                </router-link>
              </div>
            </div>
            <div class="item-price flex-around-center">{{`${currency} ${(item.prices[0].price).toFixed(2)}`}}</div>
            <div class="item-qtd flex-around-center">{{item.qtd}}</div>
            <div class="item-total flex-around-center">{{`${currency} ${(item.qtd * item.prices[0].price).toFixed(2)}`}}</div>
          </div>
        </div>


      </div>
      <div class="details-body-subtotal flex-between-center">
        <div class="separator-subotal"></div>
        <div class="values-subotal text-uppercase">Total {{`${currency} ${getCartSubtotal}`}}</div>
      </div>
    </div>


    <div class="checkout-details-footer flex-end">
      <button type="button" class="btn btn-red text-white">{{proceedToCheckout}}</button>
    </div>
  </div>
</template>

<script>

  import { mapGetters, mapState, mapActions  } from 'vuex';
  import cartHelper from '../../models/helpers/cart-helper';
  import productHelper from '../../models/helpers/product-helper';

  export default {
    name: 'StoreCheckoutDetails',
    data() {
      return {
        proceedToCheckout: this.$appConfig.lang.TITLES.proceedToCheckout,
        shoppingCart: this.$appConfig.lang.TITLES.shoppingCart,
        keepShopping: this.$appConfig.lang.TITLES.keepShopping,
        currency: this.$appConfig.currency,
        productsList: []
      }
    },
    computed: {
      ...mapGetters([
        'getCartProducts',
        'getCartSubtotal'
      ])
    },
    methods: {
      concatenateProducts() {
        this.productsList = cartHelper.concat(this.getCartProducts);
      },
    },
    created() {
      this.concatenateProducts();
    },
    watch: {

      /**
        * when cart list length is changed
        * cart changed to
        *
      */

      getCartProducts: function() {
        this.concatenateProducts();
      }
    },
    filters: {

      cropProductName: name => cartHelper.cropName(name),
      inverseCreator: name => productHelper.inverseCreator(name),
    }
  }
</script>
