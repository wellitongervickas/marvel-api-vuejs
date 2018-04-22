<style lang="scss">
  @import 'store-header';
</style>

<template>
  <div>
    <div class="store-header-advertisement">
      <store-ads></store-ads>
    </div>
    <div class="store-header-top container flex-between">
      <div class="flex3 store-header-top-logo">
        <router-link :to="{ name: 'default'}" class="flex">
          <img :src="`${location}images/layout/logo.jpg`" :title="storeName" :alt="storeName">
        </router-link>
      </div>
      <div class="flex5 store-header-top-social">
        <ul class="unstyled-list top-social-icons flex-end-items">
          <li>
            <a href="#">
              <img width="25" :src="`${location}images/icons/social/facebook.svg`" :alt="facebook" :title="facebook">
            </a>
          </li>
          <li>
            <a href="#">
              <img width="25" :src="`${location}images/icons/social/youtube.svg`" :alt="youtube" :title="youtube">
            </a>
          </li>
          <li>
            <a href="#">
              <img width="25" :src="`${location}images/icons/social/twitter.svg`" :alt="twitter" :title="twitter">
            </a>
          </li>
        </ul>
      </div>
      <div class="flex4 store-header-top-bar flex-column-between">
        <div class="top-bar-nav-top">
          <ul class="unstyled-list flex-end-content">
            <li>
              <a href="#" class="unstyled-link text-uppercase">{{welcome}}</a>
            </li>
            <li>
              <a href="#" class="unstyled-link text-uppercase">{{account}}</a>
            </li>
          </ul>
        </div>
        <div class="top-bar-nav-bottom flex-end-content">
          <div class="top-bar-search flex11 inline-flex">
            <input type="text" :placeholder="searchStore">
          </div>
          <div class="top-bar-cart flex1">
            <store-cart></store-cart>
          </div>
        </div>
      </div>
    </div>
    <div class="store-header-top-menu text-white">
      <store-menu></store-menu>
    </div>
  </div>
</template>

<script>

  import StoreAds from '../../../components/ads/store-ads.vue';
  import StoreMenu from '../../../components/menu/store-menu.vue';
  import StoreCart from '../../../components/cart/store-cart.vue';

  export default {
    name: 'StoreHeader',
    components: {
      StoreAds,
      StoreMenu,
      StoreCart
    },
    data () {
      return {
        location: this.$appConfig.base,
        storeName: this.$appConfig.lang.TITLES.storeName,
        account: this.$appConfig.lang.TITLES.account,
        welcome: this.$appConfig.lang.TITLES.welcome,
        searchStore: this.$appConfig.lang.TITLES.searchStore,
        cart: this.$appConfig.lang.TITLES.cart,
        facebook: this.$appConfig.lang.SOCIAL.facebook,
        youtube: this.$appConfig.lang.SOCIAL.youtube,
        twitter: this.$appConfig.lang.SOCIAL.twitter,
      }
    }
  }
</script>
