const ProductId = require("../../../domain/value_objects/ProductId");

class ProductNotFoundException extends Error {
	/**
	 * @param {ProductId} productIdNotFound 
	 */
	constructor(productIdNotFound) {
		super(`Product with ID ${productIdNotFound.getValue()} does not exist.`);
		this.name = this.constructor.name;
	}
}

module.exports = ProductNotFoundException;
