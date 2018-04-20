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

  function changeNextSlide(list) {

    list[0].status = false;

    setTimeout(() => {
      list.push(list.shift());
      list = setInitialSlides(list);

    }, 500);

    return list;
  };

  function changePrevSlide(list) {

    return list;
  };

  return {
    init: setInitialSlides,
    next: changeNextSlide,
    prev: changePrevSlide
  };

})();

export default productRelatedHelper;
