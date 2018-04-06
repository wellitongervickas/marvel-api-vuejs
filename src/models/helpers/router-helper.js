'use strict'

/**
  * This content block is responsible for
  * all system routes
  *
*/

import Home from '../../views/home/home.vue';
import Product from '../../views/product/product.vue';

const routes = (() => {
  return [
    {
      path: '*', component: Home, name: 'home'
    },
    {
      path: '/product/:id', component: Product, name: 'product', props: true
    }
  ]
})();

export default routes;
