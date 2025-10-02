const CartProduct = require("../../../domain/value_objects/CartProduct");

class CreateCartRequest {
	/**
	 * @param {Object} json
	 * @returns {CreateCartRequest}
	 */
	static fromJson(json) {
		return new CreateCartRequest(new Map(
			Object
				.entries(json)
				.map(([productId, quantity]) => [productId, new CartProduct(productId, quantity)])
		));
	}

	#products;

	/**
	 * @param {Map<string, CartProduct>} products
	 */
	constructor(products) {
		this.#products = products;
	}

	/**
	 * @returns {Map<string, CartProduct>}
	 */
	getProducts() {
		return this.#products;
	}
}

module.exports = CreateCartRequest;
