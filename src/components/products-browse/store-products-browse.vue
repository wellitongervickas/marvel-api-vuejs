<style lang="scss">
  @import 'store-products-browse';
</style>

<template>
  <div class="store-products-browse">
    <div class="store-products-list">
      <div class="products-list-item flex-column-center" v-for="(item, index) in productsList" :key="index" :data-id="item.id">
        <div class="products-item-thumbnail flex-around-center">
          <img :src="item.image" :alt="item.title">
        </div>
        <div class="products-item-title align-center">
          <h3>{{item.title}}</h3>
          <h4 v-if="item.creator">{{item.creator | inverseCreator}}</h4>
        </div>
      </div>
      <store-loading-content v-show="loadingStatus"></store-loading-content>
    </div>
    <div class="store-products-loadmore flex-around">
      <button @click="updateProductList()" class="btn btn-large btn-red text-white transition-slow">{{loadMore}}</button>
    </div>
  </div>
</template>

<script>

  import requestHelper from '../../models/helpers/request-helper';
  import productHelper from '../../models/helpers/product-helper';
  import Product from '../../models/class/product-class';
  import StoreLoadingContent from '../loading-content/store-loading-content';

  export default {
    name: 'ProductsBrowse',
    components: {
      StoreLoadingContent,
    },
    data() {
      return {
        loadMore: this.$appConfig.lang.TITLES.loadMore,
        loadingStatus: false,
        getParameters: {},
        productsList: [],
      }
    },
    methods: {

      /**
        * This method was created to search the list of products
        * in the api and also to be able to use it in the update method
        *
      */

      getProductsFromApi (parameters = null) {

        // Enable loading
        this.loadingStatus = true;

        const ts = Date.now();
        const apikey = this.$appConfig.api.publicKey;
        const privateKey = this.$appConfig.api.privateKey;
        const hash = requestHelper.getHash(ts, privateKey, apikey);
        const url = `${this.$appConfig.api.url}/v1/public/comics`;
        const params = Object.assign({
          ts,
          apikey,
          hash
        }, parameters);

        return this.$http.get(url, {
          params
        })
        .then(response => {

          // Disable loading
          this.loadingStatus = false;
          return response;
        })
        .catch(err => {
          console.error(err)
        });
      },

      /**
        * This method together with the search method in the api makes
        * the initial insertion of the products on the screen
        *
      */

      loadProducts() {
        this.getProductsFromApi()
        .then(response => {

          // Change parameters
          this.getParameters = requestHelper.getParameters(response.data.data);

          // Get products from api and return new list
          this.productsList = response.data.data.results.map(item => {
            return new Product(item);
          });
        })
        .catch(err => {
          console.error(err)
        });
      },

      /*
        * This method together with the standard search method
        * will update the list of current products by adding an
        * offset of 20 products
        *
      */

      updateProductList() {

        this.getParameters = requestHelper.getMoreProducts(this.getParameters);
        this.getProductsFromApi(this.getParameters)
        .then(response => {

          const newProductList = response.data.data.results.map(item => {
            return new Product(item);
          });

          this.productsList = requestHelper.mergeUpdatedList(this.productsList, newProductList);
        })
        .catch(err => {
          console.error(err)
        });
      }
    },
    created() {

      // Initial getter of products
      this.loadProducts();
    },
    filters: {

      // Change creator name
      inverseCreator(name) {
        return productHelper.inverseCreator(name);
      }
    },
  };

</script>
