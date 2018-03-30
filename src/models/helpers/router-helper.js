'use strict'

import Home from '../../views/home/home.vue';

const routes = (() => {
  return [
    {
      path: '*', component: Home
    }
  ]
})();

export default routes;
