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

  function getHash(timestamp = null, privateKey = null, publicKey = null) {

    const hash = jsMd5(`${timestamp}${privateKey}${publicKey}`);
    return hash;
  };

  return {
    getHash
  };

})();

export default requestHelper;
