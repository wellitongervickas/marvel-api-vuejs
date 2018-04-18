'use strict';

import AlertFloat from '../class/alert-float-class';

const alertHelper = (() => {

  function createAlertFloat() {
    return new AlertFloat();
  };

  return {
    createAlertFloat
  };
})();

export default alertHelper;
