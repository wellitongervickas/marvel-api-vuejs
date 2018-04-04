<style lang="scss">
  @import 'store-products-browse';
</style>

<template>
  <div>#</div>
</template>

<script>

  import requestHelper from '../../models/helpers/request-helper';

  export default {
    name: 'ProductsBrowse',
    data() {
      return {
        productsList: [],
      }
    },
    methods: {
      getProducts() {

        const date = Date.now();
        const hash = requestHelper.getHash(date, this.$appConfig.api.privateKey, this.$appConfig.api.publicKey);
        const url = `${this.$appConfig.api.url}/v1/public/comics?ts=${date}&apikey=${this.$appConfig.api.publicKey}&hash=${hash}`;

        this.$http.get(url)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.error(err)
        })
      }
    },
    created() {
      this.getProducts();
    }
  };

</script>
