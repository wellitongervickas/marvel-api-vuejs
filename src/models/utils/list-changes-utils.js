'use strict';

const listChangesUtils = (() => {

  /**
    * This function change a item in the list,
    * also when passing a "index" value of change
    * is in the specific item
    *
  */

  function changeActiveItem(list, item, index = null) {

    for (let i in list) {
      if (list[i].id == item.id) {

        let indexToChange = (!index) ? i : index;
        list[indexToChange].status = true;
      } else {

        list[i].status = false;
      }
    }

    return list;
  };

  return {
    changeActiveItem
  };

})();

export default listChangesUtils;
