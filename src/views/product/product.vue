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
        <store-product-details :details="productDetails"></store-product-details>
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
  import Product from '../../models/class/product-class';
  import requestHelper from '../../models/helpers/request-helper';

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
        loadingStatus: false,
      }
    },
    methods: {
      getProductFromApi () {

        // Enable Loading
        this.loadingStatus = true;

        // Create a object of parameters
        const ts = Date.now();
        const apikey = this.$appConfig.api.publicKey;
        const privateKey = this.$appConfig.api.privateKey;
        const hash = requestHelper.getHash(ts, privateKey, apikey);
        const url = `${this.$appConfig.api.url}/v1/public/comics/${this.id}`;
        const params = Object.assign({
          ts,
          apikey,
          hash
        });

        this.$http.get(url, {params})
        .then(response => {

          // Get product from list and change to product class
          const product = response.data.data.results.map(item => {
            return new Product(item);
          });

          this.productDetails = product[0];
          this.loadingStatus = false;
        })
        .catch(err => {
          console.error(err);
          this.loadingStatus = false

          // If invalid id, return to home
          this.$router.push('/');
        });
      }
    },
    created(){

      // Return to top
      window.scrollTo({top: 0});
      this.getProductFromApi()
    }
  }
</script>
