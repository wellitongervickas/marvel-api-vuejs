'use-strict'

const productHelper = (() => {

  /**
    * This function will return if the state is true for a description with
    * up to 100 characters, if more than 400 to, otherwise returns a full description
    *
  */

  function cropDescription(description, status) {

    const maxLengthLess = 100;
    const maxLengthMore = 400;

    if (status) {

      return `${description.substring(0, maxLengthLess)} ...`;
    } else if (description.length > 300) {

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
    return data;
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
    cropDescription,
    getDate,
    getCreator,
    inverseCreator,
    validateImageNotFound
  };

})();

export default productHelper;
