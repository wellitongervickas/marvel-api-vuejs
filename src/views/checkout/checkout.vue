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
        <store-checkout-details></store-checkout-details>
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
  import StoreLoading from '../../components/loading/store-loading.vue';
  import requestHelper from '../../models/helpers/request-helper';
  import systemHelper from '../../models/helpers/system-helper';
  import StoreCheckoutDetails from '../../components/checkout-details/store-checkout-details.vue';

  export default {
    name: 'Checkout',
    components: {
      StoreHeader,
      StoreFooter,
      StoreLoading,
      StoreCheckoutDetails
    },
    created() {

      // when component is initialized call this functions
      systemHelper.scrollTo(document.documentElement);
    }
  }
</script>
