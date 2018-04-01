const slideshowHelper = (() => {

  /**
    * Create a default object of slider list
    * on call slideshowHelper.createItem(Object)
    *
  */

  function createItem (item) {

    // Destructuring
    const { image, title, description, link} = item;

    return {
      image,
      title,
      description,
      link,
    };
  };

  /**
    * Set initial object to show in slideshow
    * when list is returned of endpoint
    *
  */

  function setInitialSliderStatus(sliderList) {

    for (let i in sliderList) {
      if (i == 0) sliderList[i].status = true;
    }

    return sliderList;
  };

  /**
    * Change next or previous slide item to show
    *
  */

  function changeActiveSlider (sliderList, control = null, index = null) {

    let activedItem = sliderList.findIndex(item => item.status == true);
    let nextItem;

    // Case using control
    if (!index && control) {
      switch (control) {
        case 'next':

          nextItem = activedItem + 1;
          break;

        case 'prev':

          nextItem = activedItem - 1;
          break;

        default:

          nextItem = 0;
          break;
      }

      if (nextItem >= 0 && nextItem < sliderList.length) {

        sliderList[nextItem].status = true;
      } else if (nextItem >= sliderList.length) {

        nextItem = 0;
      } else if (nextItem < 0) {

        nextItem = (sliderList.length - 1);
      } else {

        nextItem = 0;
        throw 'Invalid index of next slider!'
      }

    } else {

      // Case use index of slider
      nextItem = index;
    }

    // Set a new item to show
    sliderList[nextItem].status = true;

    for (let i in sliderList) {
      if (i != nextItem) sliderList[i].status = false;
    };

    return sliderList;
  };

  return {
    createItem,
    setInitialSliderStatus,
    changeActiveSlider
  }
})();

export default slideshowHelper;
