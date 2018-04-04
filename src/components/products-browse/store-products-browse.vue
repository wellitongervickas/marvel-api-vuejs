<style lang="scss">
  @import 'store-products-browse';
</style>

<template>
  <div>
    <div v-for="item in productsList">
      {{item.title}}
    </div>
  </div>
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

        const ts = Date.now();
        const hash = requestHelper.getHash(ts, this.$appConfig.api.privateKey, this.$appConfig.api.publicKey);
        const apikey = this.$appConfig.api.publicKey;
        const url = `${this.$appConfig.api.url}/v1/public/comics`;

        this.$http.get(url, {
          params: {
            ts,
            apikey,
            hash,
          }
        })
        .then(response => {
          this.productsList = response.data.data.results;
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
