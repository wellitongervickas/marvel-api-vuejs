'use-strict'

/**
  * Documentation of md5 https://www.npmjs.com/package/js-md5
  *
*/

import jsMd5 from 'js-md5';

const requestHelper = (() => {

  /**
    * This function construct default parameters object of
    * endpoint results and set by default
    *
  */

  function getParameters(data) {

    // Destructuring
    const { limit, offset } = data;

    return {
      limit,
      offset
    };
  };

  /**
    * This function create a md5 hash using a date, private Key and public Key
    * and return a unique hash for using in api.
    *
  */

  function getHash(timestamp = null, privateKey = null, publicKey = null) {
    return jsMd5(`${timestamp}${privateKey}${publicKey}`);
  };

  /**
    * This function update default parameters to get more products of
    * api endpoint for use in new request
    *
  */

  function getMoreProducts(parameters) {

    parameters.offset += 20;
    return parameters;
  };

  /**
    * This function merge old list to new list and return a array of all
    * products to show in products browse
    *
  */

  function mergeUpdatedList (oldList, newList) {
    return oldList.concat(newList);
  };

  return {
    getParameters,
    getHash,
    getMoreProducts,
    mergeUpdatedList
  };

})();

export default requestHelper;
