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
  </div>
</template>

<script>

  import StoreHeader from '../content/header/store-header.vue';
  import StoreFooter from '../content/footer/store-footer.vue';
  import StoreProductDetails from '../../components/product-details/store-product-details.vue';
  import Product from '../../models/class/product-class';
  import requestHelper from '../../models/helpers/request-helper';

  export default {
    name: 'Product',
    components: {
      StoreHeader,
      StoreFooter,
      StoreProductDetails
    },
    props: ['id'],
    data() {
      return {
        productDetails: {}
      }
    },
    methods: {
      getProductFromApi () {

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

        this.$http.get(url, {
          params
        })
        .then(response => {

          // Get product from list and change to product class
          const product = response.data.data.results.map(item => {
            return new Product(item);
          });

          // Set product details
          this.productDetails = product[0];
        })
        .catch(err => {
          console.error(err)
        });
      }
    },
    created(){

      // Return to top
      window.scrollTo({top: 0});

      // Get product
      this.getProductFromApi()
    }
  }
</script>
