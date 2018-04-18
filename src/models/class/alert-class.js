'use strict';

export default class Alert {
  constructor(alert) {
    this.message = alert.message;
    this.type = alert.type;
    this.timestamp = alert.timestamp;
  }
};
