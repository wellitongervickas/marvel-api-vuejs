'use-strict'

const productHelper = (() => {

  /**
    * This function return a value to width of div when get rating
    * Remember 160px is a default width of div
    *
  */

  function ratingCount(value) {

    const maxRatingValue = 5;
    const valueToReturn = (value / maxRatingValue) * 160;

    return valueToReturn;
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
      const editor = creators.items.filter(item => {
        if (item.role == type) {
          return item;
        }
      })

      return (editor[0]) ? editor[0].name : null;
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
    ratingCount,
    isDigitalRead,
    cropDescription,
    getDate,
    getCreator,
    inverseCreator,
    validateImageNotFound
  };

})();

export default productHelper;
