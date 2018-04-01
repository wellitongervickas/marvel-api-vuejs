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

  function changeActiveSlider (sliderList, control) {

    let activedItem = sliderList.findIndex(item => item.status == true);
    let nextItem;

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
      sliderList[nextItem].status = true;
    } else if (nextItem < 0) {

      nextItem = (sliderList.length - 1);
      sliderList[nextItem].status = true;
    } else {

      nextItem = 0;
      throw 'Invalid index of next slider!'
    }

    for (let i in sliderList) {
      if (i != nextItem) sliderList[i].status = false;
    };

    return sliderList;
  };

  function sliderConfiguration (config) {};

  return {
    createItem,
    setInitialSliderStatus,
    changeActiveSlider,
    sliderConfiguration
  }
})();

export default slideshowHelper;
