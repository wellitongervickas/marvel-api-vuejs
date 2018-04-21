<style lang="scss">
  @import 'store-products-filter';
</style>

<template>
  <div class="store-products-filter user-select">
    <div class="filter-nav-list container flex-around-center text-uppercase">
      <div class="filter-nav-item"><b>Browser By</b></div>

      <div
        class="filter-nav-item nav-item-dropdown"
        @mouseleave="filterSeriesStatus = false"
        @mouseover="filterSeriesStatus = true">
        Series
      </div>

      <div
        class="filter-nav-item nav-item-dropdown"
        @mouseleave="filterCharactersStatus = false"
        @mouseover="filterCharactersStatus = true">
        Characters
      </div>

      <div
        class="filter-nav-item nav-item-dropdown"
        @mouseleave="filterCreatorsStatus = false"
        @mouseover="filterCreatorsStatus = true">
        Creators
      </div>

    </div>

    <transition-group tag="div" class="filter-content-list container relative flex-around" name="list">
      <div class="filter-content-item text-white" v-show="filterSeriesStatus" :key="0">Series</div>
      <div class="filter-content-item text-white" v-show="filterCharactersStatus" :key="1">Characters</div>
      <div class="filter-content-item text-white" v-show="filterCreatorsStatus" :key="2">Creators</div>
    </transition-group>


  </div>
</template>

<script>
  export default {
    name: 'StoreProductsFilter',
    data() {
      return {
        filterSeriesStatus: false,
        filterCharactersStatus: false,
        filterCreatorsStatus: false,
      }
    }
  }
</script>
