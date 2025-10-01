const Product = require("../../../domain/Product");
const ProductManager = require("../../persistence/ProductManager");

class CreateProductUseCase {
	#productManager;

	/**
	 * 
	 * @param {ProductManager} productManager
	 */
	constructor(productManager) {
		this.#productManager = productManager;
	}

	async execute(createProductRequest) {
		const productData = createProductRequest.getData();
		await this.#productManager.save(Product.fromJson(productData));
	}
}

module.exports = CreateProductUseCase;
