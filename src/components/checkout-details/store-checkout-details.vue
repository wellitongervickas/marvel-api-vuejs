<style lang="scss">
  @import 'store-checkout-details';
</style>

<template>
  <div class="store-checkout-details container">
    <div class="checkout-details-header flex-between-center">
      <div class="details-header-title flex">
        <img src="/images/icons/cart/shopping-cart.png" :alt="langTitles.shoppingCart">
        <h1 class="text-red text-uppercase">{{langTitles.shoppingCart}}</h1>
      </div>
      <div class="details-header-keepshopping">
        <router-link class="default-btn" to="/">
          {{langTitles.keepShopping}}
        </router-link>
      </div>
    </div>
    <div class="checkout-details-body">
      <div class="details-body-products">
        <div class="products-list" v-show="getCartProducts.length">
          <transition-group name="fade" tag="div">
            <div class="products-item relative" v-for="(item, index) in getCartProducts" :key="item.id">
              <div class="item-info flex relative">
                <div class="info-image">
                  <router-link :to="{ name: 'product', params: { id: item.id }}">
                    <img :src="item.image" :alt="item.title">
                  </router-link>
                </div>
                <div class="info-title flex-around-center">
                  <router-link :to="{ name: 'product', params: { id: item.id }}">
                    <h3>{{item.title | cropProductName}}</h3>
                    <span class="products-item-title-creator text-uppercase" v-if="item.creator">
                      {{item.creator | inverseCreator}}
                    </span>
                  </router-link>
                </div>
              </div>
              <div class="item-price relative flex-around-center">
                {{`${currency} ${(item.prices[0].price).toFixed(2)}`}}
              </div>
              <div class="item-qtd relative">
                <div class="item-qtd-decrement flex-around-center">
                  <button
                  class="pointer"
                  type="button"
                  @click="changeProductQtd(item);item.qtd--"
                  :disabled="item.qtd == 1">-</button>
                </div>
                <div class="item-qtd-values flex-around-center">
                  <input
                  type="number"
                  v-model.number="item.qtd"
                  @input="changeProductQtd(item)"
                  min="1"
                  max="99"
                  class="default-input align-center">
                </div>
                <div class="item-qtd-increment flex-around-center">
                  <button
                  @click="changeProductQtd(item);item.qtd++"
                  class="pointer"
                  type="button">+</button>
                </div>
              </div>
              <div class="item-total flex-around-center">
                {{`${currency} ${(item.qtd * item.prices[0].price).toFixed(2)}`}}
              </div>
              <div class="item-delete">
                <button type="button" @click="deleteProductById(item.id)" class="btn btn-white btn-sm text-black">X</button>
              </div>
            </div>
          </transition-group>
        </div>
        <div class="products-list--empty" v-show="!getCartProducts.length">{{langTitles.cartEmpty}}</div>
      </div>
      <div class="details-body-subtotal flex-between-center" v-show="getCartProducts.length">
        <div class="separator-subotal"></div>
        <div class="values-subotal text-uppercase">Total {{`${currency} ${getCartSubtotal}`}}</div>
      </div>
    </div>
    <div class="checkout-details-footer flex-end">
      <button type="button" class="btn btn-red text-white">{{langTitles.proceedToCheckout}}</button>
    </div>
  </div>
</template>

<script>

  import { mapGetters, mapState, mapActions  } from 'vuex';
  import cartHelper from '../../models/helpers/cart-helper';
  import checkoutHelper from '../../models/helpers/checkout-helper';
  import productHelper from '../../models/helpers/product-helper';
  import alertHelper from '../../models/helpers/alert-helper';

  export default {
    name: 'StoreCheckoutDetails',
    data() {
      return {
        langTitles: this.$appConfig.lang.TITLES,
        langSuccess: this.$appConfig.lang.SUCCESS,
        currency: this.$appConfig.currency,
      }
    },
    computed: {
      ...mapGetters([
        'getCartProducts',
        'getCartSubtotal',
      ]),
    },
    methods: {

      ...mapActions([
        'deleteProduct',
        'updateProductQuantity',
        'addAlert',
      ]),

      /**
        * This function remove a specific
        * product of cart list with id
        *
      */

      deleteProductById(id) {
        const alert = alertHelper.createAlert(this.langSuccess.productWasRemoved, 'success');
        this.addAlert(alert);
        this.deleteProduct(id);
      },

      /**
        * This function update a specific
        * product of cart list with object
        *
      */

      changeProductQtd(product) {
        const alert = alertHelper.createAlert(this.langSuccess.productWasUpdated, 'success');
        this.addAlert(alert);
        this.updateProductQuantity(product);
      },

    },
    filters: {
      cropProductName: name => cartHelper.cropName(name),
      inverseCreator: name => productHelper.inverseCreator(name),
    }
  }
</script>
