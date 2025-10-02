const CartId = require("../../../domain/value_objects/CartId");

class CreateCartResponse {
	#cartId;

	/**
	 * @param {CartId} cartId
	 */
	constructor(cartId) {
		this.#cartId = cartId;
	}

	/**
	 * @return {CartId}
	 */
	getCartId() {
		return this.#cartId;
	}
}

module.exports = CreateCartResponse;
