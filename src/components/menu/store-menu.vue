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
        location: this.$appConfig.base,
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
        this.$http.get(this.location + 'local-api/menu/menu-header.json')
        .then(response => {
          this.menuList = response.data;
        })
        .catch(err => {
          console.error(err)
        })
      }
    },
    created() {

      // when component is initialized call this functions
      this.getMenuList();
    }
  };

</script>
