<style lang="scss">
  @import 'store-header';
</style>

<template>
  <div class="header-advertisement flex-center">
    <div class="advertisement-contents container">
      <div class="advertisement-banner">#ads content</div>
    </div>
  </div>
</template>

<script>

  import eng from '../../../models/languages/eng';

  export default {
    name: 'StoreHeader',
    data () {
      return {
        lang: eng
      }
    }
  }
</script>
