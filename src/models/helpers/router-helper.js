'use strict';

/**
  * This content block is responsible for
  * all system routes
  *
*/

import Home from '../../views/home/home.vue';
import Product from '../../views/product/product.vue';
import Checkout from '../../views/checkout/checkout.vue';

const routes = (() => {
  return [
    {
      path: '*', component: Home, name: 'home', props: false
    },
    {
      path: '/', component: Home, name: 'default'
    },
    {
      path: '/product/:id', component: Product, name: 'product', props: true
    },
    {
      path: '/checkout', component: Checkout, name: 'checkout'
    }
  ]
})();

export default routes;
