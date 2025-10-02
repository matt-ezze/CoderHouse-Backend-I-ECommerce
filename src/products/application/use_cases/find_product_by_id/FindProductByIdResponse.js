const Product = require("../../../domain/Product");

class FindProductByIdResponse {
	#product;

	/**
	 * @param {Product} product
	 */
	constructor(product) {
		this.#product = product;
	}

	/**
	 * @returns {Product}
	 */
	getProduct() {
		return this.#product;
	}
}

module.exports = FindProductByIdResponse;
