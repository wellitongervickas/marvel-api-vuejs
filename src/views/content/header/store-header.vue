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
          <img :src="location + mainLogo" :title="langTitles.storeName" :alt="langTitles.storeName">
        </router-link>
      </div>
      <div class="flex5 store-header-top-social">
        <ul class="unstyled-list top-social-icons flex-end-items">
          <li>
            <a href="#">
              <img width="25" :src="`${location + facebookImage}`" :alt="langTitles.facebook" :title="langTitles.facebook">
            </a>
          </li>
          <li>
            <a href="#">
              <img width="25" :src="`${location + youtubeImage}`" :alt="langTitles.youtube" :title="langTitles.youtube">
            </a>
          </li>
          <li>
            <a href="#">
              <img width="25" :src="`${location + twitterImage}`" :alt="langTitles.twitter" :title="langTitles.twitter">
            </a>
          </li>
        </ul>
      </div>
      <div class="flex4 store-header-top-bar flex-column-between">
        <div class="top-bar-nav-top">
          <ul class="unstyled-list flex-end-content">
            <li :style="`background-image: url(${location + separatorSmallImage})`">
              <a href="#" class="unstyled-link text-uppercase">{{langTitles.welcome}}</a>
            </li>
            <li>
              <a href="#" class="unstyled-link text-uppercase">{{langTitles.account}}</a>
            </li>
          </ul>
        </div>
        <div class="top-bar-nav-bottom flex-end-content">
          <div class="top-bar-search flex11 inline-flex">
            <input type="text" :placeholder="langTitles.searchStore" :style="`background-image: url(${location + searchImage})`">
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
        langTitles: this.$appConfig.lang.TITLES,
      }
    },
    computed: {
      mainLogo: (() => require('../../../assets/images/layout/logo.jpg')),
      youtubeImage: (() => require('../../../assets/images/icons/social/youtube.svg')),
      facebookImage: (() => require('../../../assets/images/icons/social/facebook.svg')),
      twitterImage: (() => require('../../../assets/images/icons/social/twitter.svg')),
      separatorSmallImage: (() => require('../../../assets/images/layout/separator-small.jpg')),
      separatorMediumImage: (() => require('../../../assets/images/layout/separator-medium.jpg')),
      searchImage: (() => require('../../../assets/images/icons/store/search.png')),
    }
  }
</script>
