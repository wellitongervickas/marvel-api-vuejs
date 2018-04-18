'use strict';

export default {
  addAlert(context, payload) {
    context.commit('ADD_ALERT', payload);
  },

  removeAlert(context, payload) {
    context.commit('REMOVE_ALERT', payload);
  },

  updateAlertList(context, payload) {
    context.commit('UPDATE_ALERT_LIST', payload);
  }
};
