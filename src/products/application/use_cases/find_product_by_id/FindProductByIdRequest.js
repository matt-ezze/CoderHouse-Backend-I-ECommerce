const ProductId = require("../../../domain/value_objects/ProductId");

class FindProductByIdRequest {
	#productId;

	/**
	 * @param {ProductId} productId
	 */
	constructor(productId) {
		this.#productId = productId;
	}

	/**
	 * @returns {ProductId}
	 */
	getId() {
		return this.#productId;
	}
}

module.exports = FindProductByIdRequest;
