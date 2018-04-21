'use strict';

export default {

  updateAvailableFilters(context, payload) {
    context.commit('UPDATE_AVAILABLE_FILTERS', payload);
  },

}
