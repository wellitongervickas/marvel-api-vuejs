'use strict'

/**
  * This content block is responsible for
  * all system languages
  *
*/

const eng = (() => {

  return {
    TITLES: {
      advertisement: 'Advertisement',
      welcome: 'Welcome',
      account: 'My Account',
      buy: 'Buy',
      cancel: 'Cancelar',
      add: 'Add',
      finish: 'Finish',
      search: 'Search',
      'load-more': 'Load more',
      'user-greetings': 'Hi, %s welcome!',
    },
    WARNINGS: {
      'empty-cart': 'Your shopping cart is empty!',
      'empty-stock': 'This product has out of stock!',
    },
    ERRORS: {
      purchase: 'There was an error completing your purchase!',
    },
    SUCCESS: {
      purchase: 'Your Purchase is successfully!',
      'product-add-purchase': 'You have added %s to your shopping cart!',
    },
  };

})();

export default eng;
