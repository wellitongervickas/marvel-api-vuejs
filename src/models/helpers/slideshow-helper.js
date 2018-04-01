const slideshowHelper = (() => {

  function setInitialSliderStatus(sliderList) {

    for (let i in sliderList) {
      if (i == 0) sliderList[i].status = true;
    }

    return sliderList;
  };

  function changeActiveSlider (sliderList) {
    console.log(sliderList, ' ON NEXT SLIDER')
  };

  return {
    setInitialSliderStatus,
    changeActiveSlider
  }
})();

export default slideshowHelper;
