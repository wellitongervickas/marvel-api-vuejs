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
            <label :for="`series-${index}-options`" class="pointer">
              <input
              v-model="item.status"
              class="hide"
              :id="`series-${index}-options`"
              :checked="item.status"
              @change="changeEnabledFilters(item)"
              type="checkbox">
              {{item.name}}
            </label>
          </li>
        </ul>
      </div>
      <div
        class="filter-content-item text-white"
        v-show="filterCharactersStatus"
        @mouseleave="filterCharactersStatus = false"
        :key="1">
        <ul class="filter-content-options characters-series unstyled-list flex-around-center">
          <li
            v-for="(item, index) in getAvailableFilters.characters"
            class="options-item relative"
            :class="{ 'options-item--active': item.status == true }"
            :key="index">
            <label :for="`characters-${index}-options`" class="pointer">
              <input
              v-model="item.status"
              class="hide"
              :id="`characters-${index}-options`"
              :checked="item.status"
              @change="changeEnabledFilters(item)"
              type="checkbox">
              {{item.name}}
            </label>
          </li>
        </ul>
      </div>
      <div
        class="filter-content-item text-white"
        v-show="filterCreatorsStatus"
        @mouseleave="filterCreatorsStatus = false"
        :key="2">
        <ul class="filter-content-options creators-series unstyled-list flex-around-center">
          <li
            v-for="(item, index) in getAvailableFilters.creators"
            class="options-item relative"
            :class="{ 'options-item--active': item.status == true }"
            :key="index">
            <label :for="`creators-${index}-options`" class="pointer">
              <input
              v-model="item.status"
              class="hide"
              :id="`creators-${index}-options`"
              :checked="item.status"
              @change="changeEnabledFilters(item)"
              type="checkbox">
              {{item.name}}
            </label>
          </li>
        </ul>
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

      ...mapActions(['insertFilter', 'removeFilter']),

      /**
        * When called this function, all nav won disabled status
        *
      */

      disableAllNavs() {
        this.filterSeriesStatus = false;
        this.filterCharactersStatus = false;
        this.filterCreatorsStatus = false;
      },

      changeEnabledFilters(item) {

        if (item.status === true) {

          this.insertFilter(item.name)
        } else {

          this.removeFilter(item.name)
        }
      }
    }
  };
</script>
