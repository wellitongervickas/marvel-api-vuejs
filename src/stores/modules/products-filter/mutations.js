'use strict';

import listUtils from '../../../models/utils/list-utils';

export default {

  UPDATE_AVAILABLE_FILTERS(state, payload) {

    // For Creators
    state.availableFilters.creators = listUtils.concatUniqueValuesObject(state.availableFilters.creators, payload.creators);

    // For Characters
    state.availableFilters.characters = listUtils.concatUniqueValuesObject(state.availableFilters.characters, payload.characters);

    // For Series
    state.availableFilters.series = listUtils.concatUniqueValuesObject(state.availableFilters.series, payload.series);
  },

  INSERT_FILTER(state, payload) {
    state.enabledFilters.push(payload);
  },

  REMOVE_FILTER(state, payload) {
    state.enabledFilters = state.enabledFilters.filter(item => item != payload);
  }
}
