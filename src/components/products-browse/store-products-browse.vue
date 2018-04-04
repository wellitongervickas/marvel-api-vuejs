<style lang="scss">
  @import 'store-products-browse';
</style>

<template>
  <div class="store-products-browse">


    <div class="store-products-list">
      <div class="products-list-item flex-column-center" v-for="(item, index) in productsList" :key="index">
        <div class="products-item-thumbnail flex-around-center">
          <img :src="`${item.thumbnail.path}.${item.thumbnail.extension}`" :alt="item.title">
        </div>
        <div class="products-item-title">
          <h3>{{item.title}}</h3>
        </div>
      </div>
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
        const apikey = this.$appConfig.api.publicKey;
        const privateKey = this.$appConfig.api.privateKey;

        // Create a hash to insert in parameters
        const hash = requestHelper.getHash(ts, privateKey, apikey);
        const url = `${this.$appConfig.api.url}/v1/public/comics`;

        this.$http.get(url, {
          params: {
            ts,
            apikey,
            hash,
          }
        })
        .then(response => {
          console.log(response)
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
