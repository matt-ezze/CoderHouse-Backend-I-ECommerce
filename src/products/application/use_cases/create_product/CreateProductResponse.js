const ProductId = require("../../../domain/value_objects/ProductId");

class CreateProductResponse {
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
	getProductId() {
		return this.#productId;
	}
}

module.exports = CreateProductResponse;
