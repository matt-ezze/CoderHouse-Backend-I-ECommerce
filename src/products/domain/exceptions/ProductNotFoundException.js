const ProductId = require("../value_objects/ProductId");

class ProductNotFoundException extends Error {
	/**
	 * @param {ProductId} productId 
	 */
	constructor(productId) {
		super(`Product with ID ${productId.getValue()} not found`);
		this.name = this.constructor.name;
	}
}

module.exports = ProductNotFoundException;
