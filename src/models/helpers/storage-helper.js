const storageHelper = (() => {

  function saveInStorage (key, payload) {
    localStorage.setItem(key, JSON.stringify(payload))
  };

  function getOfStorage (key) {
    const data = localStorage.getItem(key)
    return JSON.parse(data);
  };

  return {
    save: saveInStorage,
    get: getOfStorage
  };

})();

export default storageHelper;
