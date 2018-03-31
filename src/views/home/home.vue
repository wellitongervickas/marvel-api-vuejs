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
  import eng from '../../models/languages/eng';

  export default {
    name: 'Home',
    components: {
      StoreHeader,
      StoreFooter
    },
    data () {
      return {
        lang: eng
      }
    }
  }
</script>
