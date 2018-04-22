<style lang="scss">
  @import 'store-products-browse';
</style>

<template>
  <div class="store-products-browse">
    <div class="store-products-list--empty" v-show="!productsList.length">Products don't found!</div>
    <div class="store-products-list">
      <div
        class="products-list-item flex-column-center"
        v-for="(item, index) in filterdList(productsList)"
        :key="index"
        :data-id="item.id"
        v-show="item.status">
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
    </div>
    <store-loading-content v-show="loadingStatus"></store-loading-content>
    <div class="store-products-loadmore flex-around" v-show="productsList.length">
      <button
        :disabled="loadingStatus"
        @click="updateProductList()"
        class="btn btn-large btn-red text-white transition-slow">
        {{langTitles.loadMore}}
      </button>
    </div>
  </div>
</template>

<script>

  import { mapActions, mapGetters, mapState } from 'vuex';
  import requestHelper from '../../models/helpers/request-helper';
  import productHelper from '../../models/helpers/product-helper';
  import productsFilterHelper from '../../models/helpers/products-filter-helper';
  import Product from '../../models/class/product-class';
  import StoreLoadingContent from '../loading-content/store-loading-content';

  export default {
    name: 'ProductsBrowse',
    components: {
      StoreLoadingContent,
    },
    data() {
      return {
        langTitles: this.$appConfig.lang.TITLES,
        loadingStatus: false,
        getParameters: {},
        productsList: [],
      }
    },
    computed: {

      // Getters from vuex
      ...mapGetters(['getAvailableFilters', 'getEnabledFilters']),

    },
    methods: {

      // Actions from vuex
      ...mapActions(['updateAvailableFilters']),

      filterdList(list) {
        return list;
      },

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
        const url = `${this.$appConfig.api.url}/comics`;
        const params = Object.assign({
          hasDigitalIssue: true,
          orderBy: '-focDate',
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

          // Update filters
          this.updateAvailableFilters(productsFilterHelper.getFilters(response.data.data.results))

          return response;
        })
        .catch(err => {

          this.loadingStatus = false;
          return err
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
          this.productsList = productHelper.createList(response.data.data.results);

          // Verify enabled filters
          this.verifyFilterList();
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

        // Update parameters
        this.getParameters = requestHelper.getMoreProducts(this.getParameters);

        // Get new products from api
        this.getProductsFromApi(this.getParameters)
        .then(response => {

          // Create product class
          const newProductList = productHelper.createList(response.data.data.results);

          // Update the list
          this.productsList = requestHelper.mergeUpdatedList(this.productsList, newProductList);

          // Verify enabled filters
          this.verifyFilterList()
        })
        .catch(err => {
          console.error(err)
        });
      },

      /**
        * Verify product list based in enableds filters
        * is necessary change here why this list needs
        * observable property of objects of data-binding
        *
      */

      verifyFilterList() {
        for (let i in this.productsList) {
          let product = JSON.stringify(this.productsList[i]);
          if (this.getEnabledFilters.length > 0) {
            for (let x in this.getEnabledFilters) {
              let filter = this.getEnabledFilters[x];

              if (product.includes(filter)) {
                this.productsList[i].status = true;
                break;

              } else {
                this.productsList[i].status = false;
              }
            }
          } else {

            this.productsList[i].status = true;
          }
        }
      }
    },
    watch: {
      getEnabledFilters: function() {

        // Verify enabled filters
        this.verifyFilterList();
      }
    },
    created() {

      // when component is initialized call this functions
      this.loadProducts();
    },
    filters: {
      inverseCreator(name) {
        if (name) {
          return productHelper.inverseCreator(name);
        }
      }
    },
  };

</script>
