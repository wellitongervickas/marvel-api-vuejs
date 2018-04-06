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
        # {{productList}}
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
  import storageHelper from '../../models/helpers/storage-helper';

  export default {
    name: 'Product',
    components: {
      StoreHeader,
      StoreFooter
    },
    props: ['id'],
    data() {
      return {
        productList: []
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
