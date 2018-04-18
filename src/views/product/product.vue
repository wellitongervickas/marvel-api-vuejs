<style lang="scss">
  @import 'product';
</style>

<template>
  <div>
    <section>
      <header>
        <store-header></store-header>
      </header>
    </section>
    <section>
      <main>
        <store-product-details :details="productDetails" :relateds="productDetailsRelated"></store-product-details>
      </main>
    </section>
    </section>
    <section>
      <footer>
        <store-footer></store-footer>
      </footer>
    </section>
    <store-loading v-show="loadingStatus"></store-loading>
  </div>
</template>

<script>

  import StoreHeader from '../content/header/store-header.vue';
  import StoreFooter from '../content/footer/store-footer.vue';
  import StoreProductDetails from '../../components/product-details/store-product-details.vue';
  import StoreLoading from '../../components/loading/store-loading.vue';
  import requestHelper from '../../models/helpers/request-helper';
  import productHelper from '../../models/helpers/product-helper';
  import systemHelper from '../../models/helpers/system-helper';

  export default {
    name: 'Product',
    components: {
      StoreHeader,
      StoreFooter,
      StoreProductDetails,
      StoreLoading
    },
    props: ['id'],
    data() {
      return {
        productDetails: {},
        productDetailsRelated: {},
        loadingStatus: false,
        apikey: this.$appConfig.api.publicKey,
        privateKey: this.$appConfig.api.privateKey
      }
    },
    methods: {

      /**
        * This a global function to consult
        * endpoint and return a data values
        *
      */

      getProductFromApi(url) {

        // Enable Loading
        this.loadingStatus = true;

        // Create a object of parameters
        const ts = Date.now();
        const apikey = this.apikey;
        const privateKey = this.privateKey;
        const hash = requestHelper.getHash(ts, privateKey, apikey);

        return this.$http.get(url, {
          params: {
            ts, apikey, hash
          }
        })
        .then(response => {

          this.loadingStatus = false
          return response;
        })
        .catch(err => {

          console.error(err);
          this.loadingStatus = false
          this.$router.push('/');
        });
      },

      /**
        * After get an product this function is
        * responsible for get related products
        *
      */

      getRelatedProduct(data) {

        const url = data.resourceURI;
        this.getProductFromApi(url)
        .then(response => {

          // Get product from list and change to product class
          this.productDetailsRelated = this.configureProductDetails(response);
        })
      },

      /**
        * This function process informations when
        * global function return a valid product
        *
      */

      getProducts() {

        const url = `${this.$appConfig.api.url}/comics/${this.id}`;
        this.getProductFromApi(url)
        .then(response => {

          // Get product from list and change to product class
          const products = this.configureProductDetails(response);
          this.productDetails = products[0];

          // Get related products
          if (this.productDetails.series) {

            this.getRelatedProduct(this.productDetails.series)
          }

          // Scroll to top again
          systemHelper.scrollTo(document.documentElement);
        })
      },

      /**
        * When this function is called, configure
        * and return a new list of products
        *
      */

      configureProductDetails(response) {

        return productHelper.createList(response.data.data.results)
      },
    },
    watch: {
      id () {

        // when id is changed call this function
        this.getProducts();
      }
    },
    created(){

      // when component is initialized call this functions
      this.getProducts()
    }
  }
</script>
