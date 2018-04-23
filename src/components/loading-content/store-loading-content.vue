<style lang="scss">
  @import 'store-loading-content';
</style>

<template>
  <div class="store-loading-content flex-around">
    <img :src="location + loadingImage" :alt="loading">
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
    },
    computed: {
      loadingImage: (() => require('../../assets/images/layout/loading.svg'))
    }
  };

</script>
