<style lang="scss">
  @import 'store-menu';
</style>

<template>
  <nav>
    <div class="container">
      <ul class="top-menu flex-around-center unstyled-list">
        <li class="top-menu-item--hot align-center text-uppercase">{{langTitles.shop}}</li>
        <li class="align-center " v-for="(item, index) in menuList" :key="index">
          <a class="text-white inline-flex-center" :href="item.url">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

  export default {
    name: 'StoreMenu',
    data() {
      return {
        langTitles: this.$appConfig.lang.TITLES,
        menuList: []
      }
    },
    methods: {

      /**
        * This function is responsible for assigning
        * service values ​​to the component menu
        *
      */

      getMenuList() {
        this.$http.get('/local-api/menu/menu-header.json')
        .then(response => {
          this.menuList = response.data;
        })
        .catch(err => {
          console.error(err)
        })
      }
    },
    created() {

      // On load this component, get menu from endpoint
      this.getMenuList();
    }
  };

</script>
