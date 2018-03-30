/**
  * Vue Project
  *
  * To design patterns of this project use airbnb
  * -> https://github.com/airbnb/javascript
  *
  * Documentation of third party
  * Docs for Vue: https://vuejs.org/
  * Docs for VueRouter: https://router.vuejs.org/en/
  *
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

//Others Imports
import routes from './models/helpers/router-helper'
import stores from './stores/store'

/**
  * Vue Project Uses
  *
*/

Vue.use(VueRouter)

/**
  * Router Configuration
  *
*/

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes,
})

/**
  * Initialize Vue Framework
  *
*/

const app = new Vue({
  router,
  stores
}).$mount('#app')
