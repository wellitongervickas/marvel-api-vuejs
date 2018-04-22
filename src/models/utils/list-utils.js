'use strict';

const listUtils = (() => {

  /**
    * This function cancat a list with new list
    * and remove duplicate objects before return
    *
  */

  function concatUniqueValuesObject (list, payload) {

    if (list.length <= 0) {

      return payload;

    } else {

      list = list.concat(payload);
      list = uniqueValuesObject(list)

      return list;
    }

    return;
  };

  /**
    * This function return new array of unique values
    * if passing a simple array list
    *
  */

  function uniqueValues(list) {
    return [
      ...new Set(list)
    ];
  };

  /**
    * This function return new array of unique values
    * if passing a complex array of objects
    *
  */

  function uniqueValuesObject(list) {

    list = [
      ...new Set(list.map(item => JSON.stringify(item)))
    ].map(item => JSON.parse(item));

    return list;
  };

  return {
    uniqueValues,
    uniqueValuesObject,
    concatUniqueValuesObject
  };

})();

export default listUtils;
