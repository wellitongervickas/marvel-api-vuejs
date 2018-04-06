'use-strict'

import productHelper from '../helpers/product-helper';

class Product {
  constructor(product) {
    console.log(product)
    this.id = product.id;
    this.image = productHelper.validateImageNotFound(product.thumbnail.path, product.thumbnail.extension);
    this.title = product.title;
    this.creator = (product.creators.available > 0) ? product.creators.items[0].name : null;
  }
};

export default Product;
