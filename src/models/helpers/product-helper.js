'use strict';

import Product from '../class/product-class';

const productHelper = (() => {

  /**
    * This function change active tab when is clicked
    *
  */

  function changeActiveTab(list, item) {

    for (let i in list) {
      if (list[i].id == item.id) {
        list[i].status = true
      } else {
        list[i].status = false;
      }
    }

    return list;
  };

  /*
    * Create a default list of tabs in product details
    * to see more informations of showed product
    *
  */

  function createTabList () {
    return [
      { id:0, title:'Extended credits and info', status: true},
      { id:1, title:'Cover information', status: false},
      { id:2, title:'Stories', status: false},
    ];
  }

  /*
    * This method is responsible for handling a list
    * and returning objects with updated data
    *
  */

  function createList (list) {

    let newList = [];

    for (let i in list) {

      let product = list[i];

      console.log(product)

      let obj = new Product({
        id: product.id,
        image: validateImageNotFound(product.thumbnail.path, product.thumbnail.extension),
        title: product.title,
        creator: getCreator(product.creators, 'editor'),
        penciler: getCreator(product.creators, 'penciller'),
        writer: getCreator(product.creators, 'writer'),
        coverArtist: getCreator(product.creators, 'penciller (cover)'),
        modified: getDate(product.modified),
        prices: product.prices,
        description: product.description,
        digitalRead: isDigitalRead(product.prices),
        qtd: 1,
        upc: product.upc,
        format: product.format,
        stories: product.stories,
      });

      newList.push(obj);
    }

    return newList;
  };

  /**
    * This function return a value to width of div when get rating
    * Remember 165 is a default width of div
    *
  */

  function ratingCount(value) {

    const maxRatingValue = 5;
    return (value / maxRatingValue) * 165;
  };

  /**
    * This method checks if the comic has a virtual file
    *
  */

  function isDigitalRead (prices) {

    for (let i in prices) {
      if (prices[i].type == 'digitalPurchasePrice') {
        return true;
        break;
      }
    }

    return false;
  };

  /**
    * This function will return if the state is true for a description with
    * up to 100 characters, if more than 300 to, otherwise returns a full description
    *
  */

  function cropDescription(description, status) {

    const maxLengthLess = 100;
    const maxLengthMore = 300;

    if (status && description.length >= maxLengthLess) {

      return `${description.substring(0, maxLengthLess)} ...`;
    } else if (description.length >= maxLengthMore) {

      return `${description.substring(0, maxLengthMore)} ...`;
    } else {

      return description;
    }
  };

  /**
    * This function is responsible for returning a valid date
    *
  */

  function getDate(data) {

    const parsedDate = Date.parse(data);

    if (isNaN(parsedDate) == false) {

      const date = new Date(parsedDate);
      return date.toDateString();
    }

    return;
  };

  /**
    * This role is responsible for returning a creator
    *
  */

  function getCreator (creators, type) {
    if (creators.available > 0) {

      const editor = creators.items.find(item => item.role == type)
      return (editor) ? editor.name : null;
    }

    return;
  };

  /**
    * This method return a full name with comma
    *
  */

  function inverseCreator (creator) {

    // Transform full name in array
    const nameToSplit = creator.split(' ');
    if (nameToSplit.length >= 1 && nameToSplit.length <=2) {

      return `${nameToSplit[1]}, ${nameToSplit[0]}`
    }

    return creator;
  };

  /*
    * This method finds image not availabe in path of thumbnail
    * end replace for a local picture
    *
  */

  function validateImageNotFound (path, extension) {

    // Find image not available in path
    const findInString = path.includes('image_not_available');
    if (!findInString) {
      return `${path}.${extension}`;
    }

    return '/images/layout/image_not_found.jpg'
  };

  return {
    createList,
    ratingCount,
    isDigitalRead,
    cropDescription,
    getDate,
    getCreator,
    inverseCreator,
    validateImageNotFound,
    createTabList,
    changeActiveTab
  };

})();

export default productHelper;
