<style lang="scss">
  @import 'store-menu';
</style>

<template>
  <nav>
    <div class="container">
      <ul class="top-menu flex-around-center unstyled-list">
        <li class="align-center text-uppercase">{{shop}}</li>
        <li class="align-center " v-for="(item, index) in menu" :key="index">
          <a class="text-white" :href="item.link">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'StoreMenu',
    data() {
      return {
        shop: this.$appConfig.lang.TITLES.shop,
      }
    },
    computed: {
      ...mapState({
        menu (state) {
          return state.menu.list;
        }
      }),
    },
    created () {},
  };
</script>
