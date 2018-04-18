'use strict';

const listChangesUtils = (() => {

  /**
    * This function change a item in the list,
    * also when passing a "index" value of change
    * is of the specific item and otherwise get
    * a false status
    *
    * @params {list} Array
    *
    * @params {item} Object
    * -> Nneed get status and id property to use this function
    *
    * @params {index} Number
    * -> Is optional value of index in the array list
    *
  */

  function changeActiveItem(list, item, index = null) {

    if (list && item) {
      for (let i in list) {
        if (list[i].id == item.id) {

          let indexToChange = (!index) ? i : index;
          list[indexToChange].status = true;
        } else {

          list[i].status = false;
        }
      }

      return list;
    }

    return;
  };

  return {
    changeActiveItem
  };

})();

export default listChangesUtils;
