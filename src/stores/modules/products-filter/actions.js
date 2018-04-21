'use strict';

export default {

  updateAvailableFilters(context, payload) {
    context.commit('UPDATE_AVAILABLE_FILTERS', payload);
  },

  insertFilter(context, payload) {
    context.committ('INSERT_FILTER', payload);
  },

  removeFilter(context, payload) {
    context.committ('REMOVE_FILTER', payload);
  }
}
