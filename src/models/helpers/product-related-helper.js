'use strict';

import listChangesUtils from '../utils/list-changes-utils';

const productRelatedHelper = (() => {

  /**
    * This function configure initial
    * slides and return a updated list
    *
  */

  function setInitialSlides(list) {

    // Add status property in this list
    list = listChangesUtils.appendStatusProperty(list);

    for (let i in list) {
      if (i <= 3) {

        list[i].status = true;
      } else if (list.length <= 3) {

        list[i].status = true;
      } else {

        list[i].status = false;
      }
    }

    return list;
  };

  function moveSlide(list, type) {

    // Change first item to false
    list[0].status = false;

    // Wait mileseconds to remove and append again in this list
    // call set initial slides again
    setTimeout(() => {

      switch (type) {
        case 'next':

          list.push(list.shift());
          break;
        case 'prev':

          list.unshift(list.pop());
          break;

        default:

          list.push(list.shift());
          break;
      };

      list = setInitialSlides(list);

    }, 100);

    return list;

  };

  return {
    init: setInitialSlides,
    move: moveSlide
  };

})();

export default productRelatedHelper;
