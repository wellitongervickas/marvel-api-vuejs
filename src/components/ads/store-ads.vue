<style lang="scss">
  @import 'store-ads';
</style>

<template>
  <div class="advertisement flex-center user-select">
    <div
      class="advertisement-contents container flex-column-center"
      :style="`background-image: url(${location + backgroundAds})`">
      <div class="advertisement-titles align-right text-gray text-uppercase">{{langTitles.advertisement}}</div>
      <div class="advertisement-figure transition-slow"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StoreAds',
    data () {
      return {
        location: this.$appConfig.base,
        langTitles: this.$appConfig.lang.TITLES
      }
    },
    computed: {
      backgroundAds: (() => require('../../assets/images/layout/ads-background.png'))
    }
  }
</script>
