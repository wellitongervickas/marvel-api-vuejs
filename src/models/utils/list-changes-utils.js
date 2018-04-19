'use strict';

const listChangesUtils = (() => {

  /**
    * This function change a item in the list,
    * also when passing a "index" value of change
    * is of the specific item and otherwise get
    * a false status
    *
    * @params {Array} list
    *
    * @params {Object} item
    * -> Nneed get status and id property to use this function
    *
    * @params {Number} index
    * -> Is optional value of index in the array list
    *
  */

  function changeActiveItem(list, item, index = null) {

    if (list.length) {

      if (index) {
        list[index].status = true;
      }

      for (let i in list) {
        if (list[i].id == item.id && !index) {

          list[i].status = true;
        } else {

          list[i].status = false;
        }
      }
    }

    return list;
  };

  return {
    changeActiveItem
  };

})();

export default listChangesUtils;
