'use strict';

const listChangesUtils = (() => {

  /**
    * This function change a item in the list
    * creating new property status
    *
    * @params {Array} list
    *
    * @params {Object} item
    * -> Need get status and id property to use this function
    *
  */

  function changeActiveItem(list, item) {

    if (list.length) {
      for (let i in list) {
        if (list[i].id == item.id) {

          list[i].status = true;
        } else {

          list[i].status = false;
        }
      }
    }

    return list;
  };

  /**
    * This function append a status property
    * in object of list and return new list
    *
  */

  function appendStatusProperty(list) {
    for (let i in list) {
      list[i].status = false;
    };

    return list;
  };

  return {
    changeActiveItem,
    appendStatusProperty
  };

})();

export default listChangesUtils;
