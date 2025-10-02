const ProductId = require("../../../domain/value_objects/ProductId");

class DeleteProductRequest {
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

module.exports = DeleteProductRequest;
