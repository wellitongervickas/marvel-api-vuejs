'use-strict'

import Cart from '../../../models/class/cart-class';
import cartHelper from '../../../models/helpers/cart-helper';

let shoppingCart = new Cart();
shoppingCart.products = cartHelper.get();

export default shoppingCart
