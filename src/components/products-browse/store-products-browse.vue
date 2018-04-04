<style lang="scss">
  @import 'store-products-browse';
</style>

<template>
  <div>#</div>
</template>

<script>

  export default {
    name: 'ProductsBrowse',
    data() {
      return {
        productsList: [],
      }
    },
    methods: {
      getProducts() {

      }
    },
    created() {
      this.getProducts();
    }
  };

</script>
