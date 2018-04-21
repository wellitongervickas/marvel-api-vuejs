'use strict';

const textCropUtils = (() => {

  function cropSimple(text, length) {

    if (length) {

      const maxLength = length;
      if (text.length >= maxLength) {

        return `${text.substring(0, maxLength)} ...`;
      }

      return text;
    }

    return text;
  };

  return {
    cropSimple,
  };

})();

export default textCropUtils;
