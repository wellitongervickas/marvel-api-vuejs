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
      <main>
        <store-slideshow></store-slideshow>
        <div>Marvel Store</div>
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

  export default {
    name: 'Home',
    components: {
      StoreHeader,
      StoreFooter,
      StoreSlideshow
    }
  }
</script>
