'use strict';

export default {

  UPDATE_AVAILABLE_FILTERS(state, payload) {
    state.availableFilters = payload;
  },

  INSERT_FILTER(state, payload) {
    state.enabledFilters.push(payload);
  },

  REMOVE_FILTER(state, payload) {
    state.enabledFilters = state.enabledFilters.filter(item => item != payload);
  }
}
