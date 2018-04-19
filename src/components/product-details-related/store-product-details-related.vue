<style lang="scss">
  @import 'store-product-details-related';
</style>

<template>
  <div class="store-product-details-related text-white">
    <div class="details-related-content container">
      <div class="details-related-list">
        <div
          class="related-item flex-column-center"
          v-for="(item, index) in relatedList"
          :key="index"
          :data-id="item.id">
          <div class="related-item-thumbnail flex-around-center">
            <router-link :to="{ name: 'product', params: { id: item.id }}">
              <img :src="item.image" :alt="item.title">
            </router-link>
          </div>
          <div class="related-item-title flex-column-between align-center">
            <h3 class="related-item-title-name">
              <router-link :to="{ name: 'product', params: { id: item.id }}">
                {{item.title}} - {{item.status}}
              </router-link>
            </h3>
            <span class="details-related-item-title-creator text-uppercase" v-if="item.creator">
              {{item.creator | inverseCreator}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import requestHelper from '../../models/helpers/request-helper';
  import productHelper from '../../models/helpers/product-helper';
  import listChangesUtils from '../../models/utils/list-changes-utils';
  import Product from '../../models/class/product-class';

  export default {
    name: 'StoreProductDetailsRelated',
    data() {
      return {
        relatedList: [],
        apikey: this.$appConfig.api.publicKey,
        privateKey: this.$appConfig.api.privateKey
      }
    },
    methods: {

      /**
        * This method was created to search the list of products
        * in the api and also to be able to use it in the update method
        *
      */

      getProductsFromApi (parameters = null) {

        // Create a object of parameters
        const ts = Date.now();
        const apikey = this.$appConfig.api.publicKey;
        const privateKey = this.$appConfig.api.privateKey;
        const hash = requestHelper.getHash(ts, privateKey, apikey);
        const url = `${this.$appConfig.api.url}/comics`;
        const params = {
          hasDigitalIssue: false,
          orderBy: '-focDate',
          limit: 8,
          ts,
          apikey,
          hash
        };

        return this.$http.get(url, {
          params
        })
        .then(response => {

          // Disable loading
          this.loadingStatus = false;
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

          // Get products from api and return new list
          const productsList = productHelper.createList(response.data.data.results);
          this.relatedList = listChangesUtils.appendStatusProperty(productsList);
        })
        .catch(err => {
          console.error(err)
        });
      },
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
