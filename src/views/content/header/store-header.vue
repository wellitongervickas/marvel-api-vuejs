<style lang="scss">
  @import 'store-header';
</style>

<template>
  <div class="header-advertisement flex-center">
    <div class="advertisement-contents container flex-column-center">
      <div class="advertisement-titles align-right text-gray text-uppercase">{{lang.TITLES.advertisement}}</div>
      <div class="advertisement-figure"></div>
    </div>
  </div>
</template>

<script>

  import eng from '../../../models/languages/eng';

  export default {
    name: 'StoreHeader',
    data () {
      return {
        lang: this.$appConfig.lang,
      }
    }
  }
</script>
