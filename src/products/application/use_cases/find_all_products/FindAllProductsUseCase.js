const ProductManager = require("../../persistence/ProductManager");
const FindAllProductsResponse = require("./FindAllProductsResponse");

class FindAllProductsUseCase {
	#productManager;

	/**
	 * @param {ProductManager} productManager
	 */
	constructor(productManager) {
		this.#productManager = productManager;
	}

	/**
	 * @returns {Promise<FindAllProductsResponse>}
	 */
	async execute() {
		const products = await this.#productManager.findAll();
		return new FindAllProductsResponse(products);
	}
}

module.exports = FindAllProductsUseCase;
