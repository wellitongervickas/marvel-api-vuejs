'use-strict'

/**
  * Documentation of third party
  * Docs for Vue: https://vuejs.org/
  * Docs for VueRouter: https://router.vuejs.org/en/
  *
*/

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

/**
  * Vue Project Uses
  *
*/

Vue.use(Vuex)

/**
  * Vuex Exports
  *
*/

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
})
