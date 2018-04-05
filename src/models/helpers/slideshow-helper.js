'use-strict'

const slideshowHelper = (() => {


  /**
    * Set initial object to show in slideshow
    * when list is returned of endpoint
    *
  */

  function setInitialSliderStatus(list) {

    list[0].status = true;
    return list;
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

          nextItem = activeSlide + 1;
          break;

        case 'prev':

          nextItem = activeSlide - 1;
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

    // Set a new item to show
    list[nextItem].status = true;

    for (let i in list) {
      if (i != nextItem) list[i].status = false;
    };

    return list;
  };

  return {
    setInitialSliderStatus,
    changeActiveSlider
  }
})();

export default slideshowHelper;
