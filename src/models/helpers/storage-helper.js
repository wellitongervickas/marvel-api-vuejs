'use strict';

const storageHelper = (() => {

  /**
    * This method will save a data of strings in the browser memory
    * using local storage passing a key and payload
    *
  */

  function saveInStorage (key, payload = []) {
    localStorage.setItem(key, JSON.stringify(payload))
  };

  /**
    * This method will get a data of the browser memory
    * using local storage passing a key to return a data
    *
  */

  function getOfStorage (key) {
    const data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : [];
  };

  return {
    save: saveInStorage,
    get: getOfStorage
  };

})();

export default storageHelper;
