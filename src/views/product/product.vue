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

  import { mapState, mapActions, mapGetters } from 'vuex';
  import StoreHeader from '../content/header/store-header.vue';
  import StoreFooter from '../content/footer/store-footer.vue';
  import StoreProductDetails from '../../components/product-details/store-product-details.vue';
  import storageHelper from '../../models/helpers/storage-helper';
  import Product from '../../models/class/product-class';

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
        productList: [],
        productDetails: {}
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
        * Get products from memory in vuex or local storage
        *
      */

      loadProductsFromLocal(products) {

        // Verify existing products in memory before get in vuex
        const getFromStorage = storageHelper.get('products');
        this.productList = (getFromStorage.length > 1) ? getFromStorage : products;

        // If dont have a product, redirect to home
        if (this.productList.lenght <= 0) {

          this.$router.push('/')
        } else {

          this.setProductDetails();
        }
      },

      setProductDetails() {
        this.productDetails = this.productList.find(item => {
          if (item.id == this.id) {
            return item;
          }
        });
      }
    },
    created(){

      // Return to top
      window.scrollTo({top: 0});

      // Call to getter of products list
      this.loadProductsFromLocal(this.getProdutsFromLocal);
    }
  }
</script>
