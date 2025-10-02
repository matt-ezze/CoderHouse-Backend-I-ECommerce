const ProductId = require('../../../products/domain/value_objects/ProductId');
const Cart = require('../../domain/Cart');
const CartId = require('../../domain/value_objects/CartId');

class CartManager {
	/**
	 * @param {Cart} cart
	 * @return {Promise<void>}
	 */
	async save(cart) {
		throw new Error('CartManager.save() not implemented');
	}

	/**
	 * @param {CartId} cartId
	 * @return {Promise<Cart|null>}
	 */
	async findById(cartId) {
		throw new Error('CartManager.findById() not implemented');
	}

	/**
	 * @param {ProductId} productId
	 * @returns {Promise<Cart[]>}
	 */
	async findAllCartsWithProduct(productId) {
		throw new Error('CartManager.findAllCartsWithProduct() not implemented');
	}
}

module.exports = CartManager;
