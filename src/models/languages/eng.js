'use-strict'

/**
  * This content block is responsible for
  * all system languages
  *
*/

const eng = (() => {

  // To Get Dates
  const date = new Date();

  return {
    TITLES: {
      storeName: 'Marvel Store',
      storeNameShort: 'Marvel',
      advertisement: 'Advertisement',
      welcome: 'Welcome',
      account: 'My Account',
      buy: 'Buy',
      cancel: 'Cancelar',
      add: 'Add',
      finish: 'Finish',
      search: 'Search',
      searchStore: 'Search Marvel Shop',
      loadMore: 'Load more',
      userGreetings: 'Hi, %s welcome!',
      cart: 'Cart',
      shop: 'Shop',
      next: 'Next',
      prev: 'Preview',
      readUp: 'Read Up',
      loadMore: 'Load More',
      loading: 'Loading',
      readOnlineDevice: 'Read online, iPhone, iPad or Android Device',
      customerRating: 'Average customer rating',
      published: 'Published',
      creator: 'Creator',
      writer: 'Writer',
      penciller: 'Penciller',
      coverArtist: 'Cover Artist',
      readMore: 'read more',
      readLess: 'read less',
      noDescription: 'No description yet!',
      digitalPurchasePrice: 'Digital Issue',
      printPrice: 'Print Price',
    },
    WARNINGS: {
      emptyCart: 'Your shopping cart is empty!',
      emptyStock: 'This product has out of stock!',
    },
    ERRORS: {
      purchase: 'There was an error completing your purchase!',
    },
    SUCCESS: {
      purchase: 'Your Purchase is successfully!',
      productAddPurchase: 'You have added %s to your shopping cart!',
    },
    SOCIAL: {
      facebook: 'Facebook',
      youtube: 'Youtube',
      twitter: 'Twitter',
    },
    COPYRIGHT: {
      info: `${date.getFullYear()} Marvel`
    },
  };

})();

export default eng;
