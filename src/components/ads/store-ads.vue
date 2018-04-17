<style lang="scss">
  @import 'store-ads';
</style>

<template>
  <div class="advertisement flex-center user-select">
    <div class="advertisement-contents container flex-column-center">
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
        langTitles: this.$appConfig.lang.TITLES,
      }
    }
  }
</script>
