'use-strict'

class Slider {
  constructor (slider) {

    // Destructuring
    const { image, title, description, link} = slider;

    this.image = image;
    this.title = title;
    this.description = description;
    this.link = link;
    this.status = false;
  }
};

export default Slider;
