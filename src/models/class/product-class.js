class Product {
  constructor(product) {
    this.image = `${product.thumbnail.path}.${product.thumbnail.extension}`;
    this.title = product.title;
    this.creator = (product.creators.available > 0) ? product.creators.items[0].name : null;
  }
};

export default Product;
