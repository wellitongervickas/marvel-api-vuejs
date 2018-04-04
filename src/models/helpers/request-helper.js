/**
  * Documentation of md5 https://www.npmjs.com/package/js-md5
  *
*/

import jsMd5 from 'js-md5';

/**
  * Generate objects and values for api requests
  *
*/

const requestHelper = (() => {

  /**
    * This function create a md5 hash using a date, private Key and public Key
    * and return a unique hash for using in api.
    *
  */

  function getHash(timestamp = null, privateKey = null, publicKey = null) {
    return jsMd5(`${timestamp}${privateKey}${publicKey}`);
  };

  return {
    getHash
  };

})();

export default requestHelper;
