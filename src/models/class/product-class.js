'use-strict'

import productHelper from '../helpers/product-helper';

class Product {
  constructor(product) {
    console.log(product)
    this.id = product.id;
    this.image = productHelper.validateImageNotFound(product.thumbnail.path, product.thumbnail.extension);
    this.title = product.title;
    this.creator = productHelper.getCreator(product.creators, 'editor');
    this.penciler = productHelper.getCreator(product.creators, 'penciller');
    this.writer = productHelper.getCreator(product.creators, 'writer');
    this.coverArtist = productHelper.getCreator(product.creators, 'penciller (cover)');
  }
};

export default Product;
