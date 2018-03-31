<style lang="scss">
  @import 'store-menu';
</style>

<template>
  <nav>
    <div class="container">
      <ul class="top-menu flex-around-center unstyled-list">
        <li>
          Shop
        </li>
        <li v-for="(item, index) in menu" :key="index">
          <a :href="item.link">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'StoreMenu',
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
