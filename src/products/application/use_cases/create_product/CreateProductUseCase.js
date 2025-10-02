const Product = require("../../../domain/Product");
const ProductId = require("../../../domain/value_objects/ProductId");
const ProductManager = require("../../persistence/ProductManager");
const CreateProductRequest = require("./CreateProductRequest");

class CreateProductUseCase {
	#productManager;

	/**
	 * 
	 * @param {ProductManager} productManager
	 */
	constructor(productManager) {
		this.#productManager = productManager;
	}

	/**
	 * @param {CreateProductRequest} createProductRequest
	 */
	async execute(createProductRequest) {
		await this.#productManager.save(new Product({
			id: ProductId.generate(),
			title: createProductRequest.getTitle(),
			description: createProductRequest.getDescription(),
			code: createProductRequest.getCode(),
			price: createProductRequest.getPrice(),
			status: createProductRequest.getStatus(),
			stock: createProductRequest.getStock(),
			category: createProductRequest.getCategory(),
			thumbnails: createProductRequest.getThumbnails()
		}));
	}
}

module.exports = CreateProductUseCase;
