const Cart = require("../../../domain/Cart");

class FindCartByIdResponse {
	#cart;

	/**
	 * @param {Cart} cart 
	 */
	constructor(cart) {
		this.#cart = cart;
	}

	/**
	 * @returns {Cart}
	 */
	getCart() {
		return this.#cart;
	}
}

module.exports = FindCartByIdResponse;
