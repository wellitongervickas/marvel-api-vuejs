<style lang="scss">
  @import 'store-products-browse';
</style>

<template>
  <div class="store-products-browse">
    <div class="store-products-list">
      <div class="products-list-item flex-column-center" v-for="(item, index) in productsList" :key="index" :data-id="item.id">
        <div class="products-item-thumbnail flex-around-center">
          <router-link :to="{ name: 'product', params: { id: item.id }}">
            <img :src="item.image" :alt="item.title">
          </router-link>
        </div>
        <div class="products-item-title flex-column-between align-center">
          <h3 class="products-item-title-name">
            <router-link :to="{ name: 'product', params: { id: item.id }}">
              {{item.title}}
            </router-link>
          </h3>
          <span class="products-item-title-creator text-uppercase" v-if="item.creator">{{item.creator | inverseCreator}}</span>
          <div class="products-item-title-break"></div>
        </div>
      </div>
      <store-loading-content v-show="loadingStatus"></store-loading-content>
    </div>
    <div class="store-products-loadmore flex-around">
      <button
        :disabled="loadingStatus"
        @click="updateProductList()"
        class="btn btn-large btn-red text-white transition-slow">
        {{loadMore}}
      </button>
    </div>
  </div>
</template>

<script>

  import { mapState, mapActions, mapGetters } from 'vuex';
  import requestHelper from '../../models/helpers/request-helper';
  import productHelper from '../../models/helpers/product-helper';
  import Product from '../../models/class/product-class';
  import StoreLoadingContent from '../loading-content/store-loading-content';
  import storageHelper from '../../models/helpers/storage-helper';

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
    computed: {

      /**
        * Get products from memory in vuex
        *
      */
      ...mapGetters(['getProdutsFromLocal'])
    },
    methods: {

      /**
        * Save products from endpoint in vuex to reuse again when
        * user need see an product details
        *
      */

      ...mapActions([
          'saveProducts'
      ]),

      /**
        * This method was created to search the list of products
        * in the api and also to be able to use it in the update method
        *
      */

      getProductsFromApi (parameters = null) {

        // Enable loading
        this.loadingStatus = true;

        // Create a object of parameters
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

          // Save in vuex
          this.saveProducts(this.productsList);
        })
        .catch(err => {
          console.error(err)
        });
      },

      /**
        * This method together with the standard search method
        * will update the list of current products by adding an
        * offset of 20 products
        *
      */

      updateProductList() {

        this.getParameters = requestHelper.getMoreProducts(this.getParameters);
        this.getProductsFromApi(this.getParameters)
        .then(response => {

          // Create product class
          const newProductList = response.data.data.results.map(item => {
            return new Product(item);
          });

          // Verify existing products in memory before get in vuex
          const getFromStorage = storageHelper.get('products');
          const productsList = (getFromStorage.length > 1) ? getFromStorage : this.getProdutsFromLocal;

          // Update the list
          this.productsList = requestHelper.mergeUpdatedList(productsList, newProductList);

          // Save in vuex again
          this.saveProducts(this.productsList);
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
