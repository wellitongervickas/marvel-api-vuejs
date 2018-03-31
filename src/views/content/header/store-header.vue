<style lang="scss">
  @import 'store-header';
</style>

<template>
  <div>
    <div class="header-advertisement flex-center">
      <div class="advertisement-contents container flex-column-center">
        <div class="advertisement-titles align-right text-gray text-uppercase">{{advertisement}}</div>
        <div class="advertisement-figure transition-slow"></div>
      </div>
    </div>
    <div class="header-top container flex-between">
      <div class="flex3 header-top-logo user-select">
        <a href="#">
          <img src="/images/layout/logo.jpg" :title="storeName" :alt="storeName">
        </a>
      </div>
      <div class="flex5 header-top-social">
        <ul class="unstyled-list top-social-icons flex-end-items user-select">
          <li>
            <a href="#">
              <img src="/images/icons/social/facebook.png" :alt="facebook" :title="facebook">
            </a>
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
      <div class="flex4 header-top-bar">
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
        <div class="top-bar-nav-bottom">
          <div>#Search</div>
          <div>#Cart</div>
        </div>
      </div>
    </div>
    <div class="header-top-menu">
      #Main menu
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StoreHeader',
    data () {
      return {
        advertisement: this.$appConfig.lang.TITLES.advertisement,
        storeName: this.$appConfig.lang.TITLES.storeName,
        account: this.$appConfig.lang.TITLES.account,
        welcome: this.$appConfig.lang.TITLES.welcome,
        facebook: this.$appConfig.lang.SOCIAL.facebook,
        youtube: this.$appConfig.lang.SOCIAL.youtube,
        twitter: this.$appConfig.lang.SOCIAL.twitter,
      }
    }
  }
</script>
