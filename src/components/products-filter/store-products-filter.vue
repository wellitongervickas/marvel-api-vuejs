<style lang="scss">
  @import 'store-products-filter';
</style>

<template>
  <div class="store-products-filter user-select">
    <div class="filter-nav-list container flex-around-center text-uppercase">
      <div class="filter-nav-item"><b>Browser By</b></div>
      <div
        class="filter-nav-item nav-item-dropdown"
        :class="{ 'nav-item-dropdown--active': filterSeriesStatus == true }"
        @mouseenter="disableAllNavs()"
        @click="filterSeriesStatus = true">
        Series
      </div>
      <div
        class="filter-nav-item nav-item-dropdown"
        :class="{ 'nav-item-dropdown--active': filterCharactersStatus == true }"
        @mouseenter="disableAllNavs()"
        @click="filterCharactersStatus = true">
        Characters
      </div>
      <div
        class="filter-nav-item nav-item-dropdown"
        :class="{ 'nav-item-dropdown--active': filterCreatorsStatus == true }"
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
        <ul class="filter-content-options option-series unstyled-list flex-around-center">
          <li
            v-for="(item, index) in getAvailableFilters.series"
            class="options-item relative"
            :class="{ 'options-item--active': item.status == true }"
            :key="index">
            <input
            v-model="item.status"
            class="hide"
            :id="`series-${index}-options`"
            :checked="item.status"
            type="checkbox">
            <label :for="`series-${index}-options`" class="pointer">{{item.name}}</label>
          </li>
        </ul>
      </div>


      <div
        class="filter-content-item text-white"
        v-show="filterCharactersStatus"
        @mouseleave="filterCharactersStatus = false"
        :key="1">
        #
      </div>


      <div
        class="filter-content-item text-white"
        v-show="filterCreatorsStatus"
        @mouseleave="filterCreatorsStatus = false"
        :key="2">
        #
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

      /**
        * When called this function, all nav won disabled status
        *
      */

      disableAllNavs() {
        this.filterSeriesStatus = false;
        this.filterCharactersStatus = false;
        this.filterCreatorsStatus = false;
      }
    }
  };
</script>
