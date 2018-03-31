<style lang="scss">
  @import 'store-header';
</style>

<template>
  <div>
    <div class="header-advertisement flex-center">
      <div class="advertisement-contents container flex-column-center">
        <div class="advertisement-titles align-right text-gray text-uppercase">{{advertisement}}</div>
        <div class="advertisement-figure"></div>
      </div>
    </div>
    <div class="header-top container flex-between">
      <div class="flex3">
        <img src="/images/layout/logo.jpg" :title="storeName" :alt="storeName">
      </div>
      <div class="flex5">#social</div>
      <div class="flex4">#menu</div>
    </div>
    <div class="header-menu">
      #Main menu
    </div>
  </div>
</template>

<script>

  import eng from '../../../models/languages/eng';

  export default {
    name: 'StoreHeader',
    data () {
      return {
        advertisement: this.$appConfig.lang.TITLES.advertisement,
        storeName: this.$appConfig.lang.TITLES.storeName,
      }
    }
  }
</script>
