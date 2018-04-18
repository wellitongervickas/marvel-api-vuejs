'use strict';

import listChangesUtils from '../utils/list-changes-utils';

const slideshowHelper = (() => {


  /**
    * Set initial object to show in slideshow
    * when list is returned of endpoint
    *
  */

  function setInitialSliderStatus(list) {

    return listChangesUtils.changeActiveItem(list, list[0]);;
  };

  /**
    * Change next or previous slide item to show
    *
  */

  function changeActiveSlider (list, control = null, index = null) {

    const activeSlide = list.findIndex(item => item.status == true);
    let nextItem;

    // Case using control
    if (!index && control) {
      switch (control) {
        case 'next':

          nextItem = (activeSlide + 1);
          break;

        case 'prev':

          nextItem = (activeSlide - 1);
          break;

        default:

          nextItem = 0;
          break;
      }

      if (nextItem >= 0 && nextItem < list.length) {

        list[nextItem].status = true;
      } else if (nextItem >= list.length) {

        nextItem = 0;
      } else if (nextItem < 0) {

        nextItem = (list.length - 1);
      } else {

        nextItem = 0;
        throw 'Invalid index of next slider!'
      }

    } else {

      // Case use index of slider
      nextItem = index;
    }

    // Change active slider using utils
    return listChangesUtils.changeActiveItem(list, list[nextItem]);
  };

  return {
    setInitialSliderStatus,
    changeActiveSlider
  }
})();

export default slideshowHelper;
