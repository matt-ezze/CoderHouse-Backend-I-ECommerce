const CartProduct = require("../../../domain/value_objects/CartProduct");
const InvalidJsonSchemaException = require("./exceptions/InvalidJsonSchemaException");

class CreateCartRequest {
	/**
	 * @param {Object} json
	 * @returns {CreateCartRequest}
	 */
	static fromJson(json) {
		if (!Array.isArray(json)) {
			throw new InvalidJsonSchemaException('Expected an array of products');
		}
		const products = json.map(productJson => CartProduct.fromJson(productJson));
		return new CreateCartRequest(products);
	}

	#products;

	/**
	 * @param {CartProduct[]} products 
	 */
	constructor(products) {
		this.#products = products;
	}

	/**
	 * @returns {CartProduct[]}
	 */
	getProducts() {
		return this.#products;
	}
}

module.exports = CreateCartRequest;
