const Product = require("../../../domain/Product");

class FindAllProductsResponse {
	#products;

	constructor(products) {
		this.#products = products;
	}

	/**
	 * @returns {Product[]}
	 */
	getProducts() {
		return this.#products;
	}
}

module.exports = FindAllProductsResponse;
