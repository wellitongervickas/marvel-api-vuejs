<style lang="scss">
  @import 'store-header';
</style>

<template>
  <div>
    <div class="header-advertisement">
      <store-ads></store-ads>
    </div>
    <div class="header-top container flex-between user-select">
      <div class="flex3 header-top-logo">
        <a class="flex" href="#">
          <img src="/images/layout/logo.jpg" :title="storeName" :alt="storeName">
        </a>
      </div>
      <div class="flex5 header-top-social">
        <ul class="unstyled-list top-social-icons flex-end-items">
          <li>
            <a href="#">
              <img src="/images/icons/social/facebook.png" :alt="facebook" :title="facebook"></a>
          </li>
          <li>
            <a href="#">
              <img src="/images/icons/social/youtube.png" :alt="youtube" :title="youtube">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/icons/social/twitter.png" :alt="twitter" :title="twitter">
            </a>
          </li>
        </ul>
      </div>
      <div class="flex4 header-top-bar flex-column-between">
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
            <img src="/images/icons/cart/shopping-cart.png" :alt="cart">
          </div>
        </div>
      </div>
    </div>
    <div class="header-top-menu text-white">
      <store-menu></store-menu>
    </div>
  </div>
</template>

<script>

  import StoreAds from '../../../components/ads/store-ads.vue';
  import StoreMenu from '../../../components/menu/store-menu.vue';

  export default {
    name: 'StoreHeader',
    components: {
      StoreAds,
      StoreMenu,
    },
    data () {
      return {
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
