const ProductId = require('../../../../products/domain/value_objects/ProductId');

class OnProductDeletedRequest {
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

module.exports = OnProductDeletedRequest;
