'use strict';

import Alert from '../class/alert-class';

const alertHelper = (() => {

  /**
    * This function create a alert element
    *
  */

  function createAlert(message, type) {

    const timestamp = Date.now();

    return new Alert({
      message,
      type,
      timestamp
    });
  };

  /**
    * This function remove alerts after
    * few seconds and return new list
    *
  */

  function removeAlerts(list) {

    if (list.length >= 5) {

      list.shift();
    }

    if (list.length >= 1) {

      setInterval(() => {
        for (let i in list) {

          let date = Date.now();
          if ((list[i].timestamp + 5000) <= date) {

            list.splice(i, 1);
            break;
          }
        }
      }, 500)
    }

    return list;
  };

  return {
    removeAlerts,
    createAlert,
  };

})();

export default alertHelper;
