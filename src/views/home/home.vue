<style lang="scss">
  @import 'home';
</style>

<template>
  <div>
    <store-header></store-header>
    <div class="container">Marvel Store </div>
    <store-footer></store-footer>
  </div>
</template>

<script>
  import StoreHeader from '../content/header/store-header.vue'
  import StoreFooter from '../content/footer/store-footer.vue'

  export default {
    name: 'Home',
    components: {
      StoreHeader,
      StoreFooter
    }
  }
</script>
