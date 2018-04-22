<style lang="scss">
  @import 'store-loading-content';
</style>

<template>
  <div class="store-loading-content flex-around">
    <img :src="`${location}images/layout/loading.svg`" :alt="loading">
  </div>
</template>

<script>

  export default {
    name: 'StoreLoadingContent',
    data() {
      return {
        location: this.$appConfig.base,
        loading: this.$appConfig.lang.loading
      }
    }
  };

</script>
