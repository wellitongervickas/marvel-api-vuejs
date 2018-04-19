'use strict';

export default class Product {
  constructor(product) {
    this.id = product.id;
    this.image = product.image;
    this.title = product.title;
    this.creator = product.creator;
    this.penciler = product.penciler;
    this.writer = product.writer;
    this.coverArtist = product.coverArtist;
    this.modified = product.modified;
    this.prices = product.prices;
    this.description = product.description;
    this.digitalRead = product.digitalRead;
    this.qtd = product.qtd;
    this.upc = product.upc;
    this.format = product.format;
    this.stories = product.stories;
    this.characters = product.characters;
    this.series = product.series;
  }
};
