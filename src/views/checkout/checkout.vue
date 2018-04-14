<style lang="scss">
  @import 'checkout';
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
        hello from checkout
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
  import systemHelper from '../../models/helpers/system-helper';

  export default {
    name: 'Checkout',
    components: {
      StoreHeader,
      StoreFooter,
      StoreProductDetails,
      StoreLoading
    },
    data() {
      return {
        loadingStatus: false,
      }
    }
  }
</script>
