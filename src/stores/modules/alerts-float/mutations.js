'use strict';

export default {
  ADD_ALERT(state, payload) {
    state.list.push(payload);
  },

  REMOVE_ALERT(state, payload) {
    state.list.splice(payload, 1);
  },
};
