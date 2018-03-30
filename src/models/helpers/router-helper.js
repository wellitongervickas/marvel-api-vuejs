'use strict'

/**
  * This content block is responsible for
  * all system routes
  *
*/

import Home from '../../views/home/home.vue';

const routes = (() => {
  return [
    {
      path: '*', component: Home
    }
  ]
})();

export default routes;
