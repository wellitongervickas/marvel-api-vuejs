const productHelper = (() => {

  /**
    * This method return a full name with comma
    *
  */

  function inverseCreator (name) {

    // Transform full name in array
    const nameToSplit = name.split(' ');

    if (nameToSplit.length >= 1 && nameToSplit.length <=2) {
      return `${nameToSplit[1]}, ${nameToSplit[0]}`
    }

    return name;
  };

  /*
    * This method finds image not availabe in path of thumbnail
    * end replace for a local picture
  */

  function validateImageNotFound (path, extension) {

    // Find image not available in path
    let findInString = path.includes('image_not_available');

    if (!findInString) {
      return `${path}.${extension}`;
    }

    return '/images/layout/image_not_found.jpg'
  };

  return {
    inverseCreator,
    validateImageNotFound
  };

})();

export default productHelper;
