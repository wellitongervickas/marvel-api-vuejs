const slideshowHelper = (() => {

  function setInitialSliderStatus(slider) {

    for (let i in slider) {
      if (i == 0) {
        slider[i].status = true;
      }
    }

    return slider;
  };

  return {
    setInitialSliderStatus
  }
})();

export default slideshowHelper;
