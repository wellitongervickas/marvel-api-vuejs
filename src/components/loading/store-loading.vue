<style lang="scss">
  @import 'store-loading';
</style>

<template>
  <div class="store-loading flex-around">
    <img src="/images/layout/loading.svg" :alt="loading">
  </div>
</template>

<script>

  export default {
    name: 'StoreLoading',
    data() {
      return {
        loading: this.$appConfig.lang.loading
      }
    }
  };

</script>
