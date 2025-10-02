const CartId = require("../../../domain/value_objects/CartId");

class FindCartByIdRequest {
	#cartId;

	/**
	 * @param {CartId} cartId 
	 */
	constructor(cartId) {
		this.#cartId = cartId;
	}

	/**
	 * @returns {CartId}
	 */
	getCartId() {
		return this.#cartId;
	}
}

module.exports = FindCartByIdRequest;
