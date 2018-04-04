<style lang="scss">
  @import 'store-footer';
</style>

<template>
  <div class="store-footer">
    <div class="store-footer-advertisement">
      <store-ads></store-ads>
    </div>
    <div class="store-footer-content flex-around container">
      <ul class="store-footer-list text-white unstyled-list" v-for="(item, indexItem) in menuList" :key="indexItem">
        <h4 class="store-footer-title text-uppercase">{{item.name}}</h4>
        <li class="store-footer-link" v-for="(link, indexLink) in item.items" :key="indexLink">
          <a :href="link.url">{{link.name}}</a>
        </li>
      </ul>
    </div>
    <div class="store-footer-copyright flex-between-center container">
      <div class="copyright-logo flex1"><img src="/images/layout/logo-footer.jpg" :alt="storeName"></div>
      <div class="copyright-info flex10 flex-between">
        <div class="copyright-info-content flex10">
          <ul class="flex-around unstyled-list">
            <li v-for="(item, index) in menuCopyrightList" :key="index">
              <a class="text-gray" :href="item.url">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <div class="copyright-info-copy text-gray flex1">&copy; {{storeInfo}}</div>
      </div>
      <div class="copyright-social flex1">
        <ul class="unstyled-list flex-between">
          <li>
            <a href="#">
              <img
              width="25"
              src="/images/icons/social/facebook.svg"
              :alt="facebook">
            </a>
          </li>
          <li>
            <a href="#">
              <img
              width="25"
              src="/images/icons/social/youtube.svg"
              :alt="youtube">
            </a>
          </li>
          <li>
            <a href="#">
              <img
              width="25"
              src="/images/icons/social/twitter.svg"
              :alt="twitter">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import StoreAds from '../../../components/ads/store-ads.vue';

  export default {
    name: 'StoreFooter',
    components: {
      StoreAds,
    },
    data() {
      return {
        storeName: this.$appConfig.lang.TITLES.storeName,
        storeInfo: this.$appConfig.lang.COPYRIGHT.info,
        facebook: this.$appConfig.lang.SOCIAL.facebook,
        youtube: this.$appConfig.lang.SOCIAL.youtube,
        twitter: this.$appConfig.lang.SOCIAL.twitter,
        menuList: [],
        menuCopyrightList: [],
      }
    },
    methods: {

      /**
        * This function is responsible for assigning
        * service values ​​to the component menu
        *
      */

      getMenuList() {
        this.$http.get('/local-api/menu/menu-footer.json')
        .then(response => {
          this.menuList = response.data;
        })
        .catch(err => {
          console.error(err)
        })
      },

      /**
        * This function is responsible for assigning
        * service values ​​to the component menu copyright
        *
      */

      getMenuCopyrightList() {
        this.$http.get('/local-api/menu/menu-copyright.json')
        .then(response => {
          this.menuCopyrightList = response.data;
        })
        .catch(err => {
          console.error(err)
        })
      }
    },
    created() {

      // On load this component, get menu from endpoint
      this.getMenuList();

      // On load this component, get menu copyright from endpoint
      this.getMenuCopyrightList();
    }
  }
</script>
