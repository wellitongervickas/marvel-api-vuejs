<style lang="scss">
  @import 'store-products-filter';
</style>

<template>
  <div class="store-products-filter user-select">

    <div class="products-filter">
      <div class="filter-nav-list container flex-around-center text-uppercase">
        <div class="filter-nav-item"><b>Browser By</b></div>
        <div
          class="filter-nav-item nav-item-dropdown"
          :class="{ 'nav-item-dropdown--active': filterSeriesStatus == true }"
          @mouseenter="disableAllNavs()"
          @click="filterSeriesStatus = !filterSeriesStatus">
          Series
        </div>
        <div
          class="filter-nav-item nav-item-dropdown"
          :class="{ 'nav-item-dropdown--active': filterCharactersStatus == true }"
          @mouseenter="disableAllNavs()"
          @click="filterCharactersStatus = !filterCharactersStatus">
          Characters
        </div>
        <div
          class="filter-nav-item nav-item-dropdown"
          :class="{ 'nav-item-dropdown--active': filterCreatorsStatus == true }"
          @mouseenter="disableAllNavs()"
          @click="filterCreatorsStatus = !filterCreatorsStatus">
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

    <div class="products-filter-list container" v-show="productsFilter.enabledFilters.length">
      <ul>
        <li
          v-for="(item, index) in productsFilter.enabledFilters"
          :key="index"
          @click="removeFilterFromList(item)">
          {{item}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

  import { mapGetters, mapActions , mapState } from 'vuex';
  import alertHelper from '../../models/helpers/alert-helper';

  export default {
    name: 'StoreProductsFilter',
    data() {
      return {
        langTitles: this.$appConfig.lang.TITLES,
        langSuccess: this.$appConfig.lang.SUCCESS,
        filterSeriesStatus: false,
        filterCharactersStatus: false,
        filterCreatorsStatus: false,
      }
    },
    computed: {

      // Getters from vuex
      ...mapGetters(['getAvailableFilters', 'getEnabledFilters']),

      // States from vuex
      ...mapState(['productsFilter'])
    },
    methods: {

      // Actions from vuex
      ...mapActions(['insertFilter', 'removeFilter', 'addAlert']),

      /**
        * When called this function, all nav won disabled status
        *
      */

      disableAllNavs() {
        this.filterSeriesStatus = false;
        this.filterCharactersStatus = false;
        this.filterCreatorsStatus = false;
      },

      /**
        * This function enable or disable active
        * filter of the list and change state in vuex
        *
      */

      changeEnabledFilters(item) {

        if (item.status === true) {

          this.insertFilter(item.name)
        } else {

          this.removeFilter(item.name)
        }
      },

      /**
        * Remove single item of filter list
        *
      */

      removeFilterFromList(name) {
        if (name) {
          this.addAlert(alertHelper.createAlert(this.langSuccess.filterWasRemoved, 'success'));
          this.removeFilter(name);
          this.verifyFilterToChangeStatus(name)
        };
      },

      verifyFilterToChangeStatus(name) {

        let concatToFind = [].concat(
          this.getAvailableFilters.creators,
          this.getAvailableFilters.characters,
          this.getAvailableFilters.series
        );

        for (let i in concatToFind) {
          if (concatToFind[i].name == name) concatToFind[i].status = false;
        };
      }
    }
  };
</script>
