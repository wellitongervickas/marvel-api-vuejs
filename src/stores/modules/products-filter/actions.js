'use strict';

export default {

  updateAvailableFilters(context, payload) {
    context.commit('UPDATE_AVAILABLE_FILTERS', payload);
  },

  insertFilter(context, payload) {
    context.commit('INSERT_FILTER', payload);
  },

  removeFilter(context, payload) {
    context.commit('REMOVE_FILTER', payload);
  }
}
