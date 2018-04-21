'use strict';

export default {
  getAvailableFilters(state) {
    return state.availableFilters;
  },

  getEnabledFilters(state) {
    return state.enabledFilters;
  }
}
