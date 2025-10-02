const ProductManager = require("../../persistence/ProductManager");
const DeleteProductRequest = require("./DeleteProductRequest");

class DeleteProductUseCase {
	#productManager;

	/**
	 * @param {ProductManager} productManager 
	 */
	constructor(productManager) {
		this.#productManager = productManager;
	}

	/**
	 * @param {DeleteProductRequest} request
	 */
	async execute(request) {
		await this.#productManager.delete(request.getProductId());
	}
}

module.exports = DeleteProductUseCase;
