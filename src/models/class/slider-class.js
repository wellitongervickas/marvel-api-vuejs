'use-strict'

/**
  * This class is responsible for handling
  * the initial slideshow data
  *
*/

class Slider {
  constructor (slider) {
    this.image = slider.image;
    this.title = slider.title;
    this.description = slider.description;
    this.link = slider.link;
    this.status = false;
  }

  get getSliderList() {
    return this;
  }
}

export default Slider;
