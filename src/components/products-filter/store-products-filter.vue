<style lang="scss">
  @import 'store-products-filter';
</style>

<template>
  <div class="store-products-filter user-select">
    <div class="filter-nav-list container flex-around-center text-uppercase">
      <div class="filter-nav-item"><b>Browser By</b></div>
      <div
        class="filter-nav-item nav-item-dropdown"
        @mouseenter="disableAllNavs()"
        @click="filterSeriesStatus = true">
        Series
      </div>
      <div
        class="filter-nav-item nav-item-dropdown"
        @mouseenter="disableAllNavs()"
        @click="filterCharactersStatus = true">
        Characters
      </div>
      <div
        class="filter-nav-item nav-item-dropdown"
        @mouseenter="disableAllNavs()"
        @click="filterCreatorsStatus = true">
        Creators
      </div>
    </div>
    <transition-group tag="div" class="filter-content-list container relative flex-around" name="list">
      <div
        class="filter-content-item text-white"
        v-show="filterSeriesStatus"
        @mouseleave="filterSeriesStatus = false"
        :key="0">
        {{getAvailableFilters.series}}
      </div>
      <div
        class="filter-content-item text-white"
        v-show="filterCharactersStatus"
        @mouseleave="filterCharactersStatus = false"
        :key="1">
        {{getAvailableFilters.characters}}
      </div>
      <div
        class="filter-content-item text-white"
        v-show="filterCreatorsStatus"
        @mouseleave="filterCreatorsStatus = false"
        :key="2">
        {{getAvailableFilters.creators}}
      </div>
    </transition-group>
  </div>
</template>

<script>

  import { mapGetters, mapActions , mapState } from 'vuex';

  export default {
    name: 'StoreProductsFilter',
    data() {
      return {
        filterSeriesStatus: false,
        filterCharactersStatus: false,
        filterCreatorsStatus: false,
      }
    },
    computed: {
      ...mapGetters(['getAvailableFilters'])
    },
    methods: {
      disableAllNavs() {
        this.filterSeriesStatus = false;
        this.filterCharactersStatus = false;
        this.filterCreatorsStatus = false;
      }
    }
  };
</script>
