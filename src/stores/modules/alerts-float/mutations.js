'use strict';

import alertHelper from '../../../models/helpers/alert-helper';

export default {

  ADD_ALERT(state, payload) {
    state.list.push(payload);
  },

  REMOVE_ALERT(state, payload) {
    state.list.splice(payload, 1);
  },

  UPDATE_ALERT_LIST(state, payload) {
    state.list = payload;
  }
};
