<style lang="scss">
  @import 'home';
</style>

<template>
  <div>
    <section>
      <header>
        <store-header></store-header>
      </header>
    </section>
    <section>
      <main class="relative">
        <div class="shadow-cart" v-show="getStatusCart"></div>
        <store-slideshow></store-slideshow>
        <div class="store-content store-content-home relative">
          <store-products-filter></store-products-filter>
          <div class="container">
            <store-products-browse></store-products-browse>
          </div>
        </div>
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
  import StoreSlideshow from '../../components/slideshow/store-slideshow.vue';
  import StoreProductsBrowse from '../../components/products-browse/store-products-browse.vue';
  import StoreProductsFilter from '../../components/products-filter/store-products-filter.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Home',
    components: {
      StoreHeader,
      StoreFooter,
      StoreSlideshow,
      StoreProductsBrowse,
      StoreProductsFilter
    },
    computed: {
      ...mapGetters([
        'getStatusCart'
      ])
    },
  }
</script>
