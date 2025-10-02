const Product = require("../../../domain/Product");
const ProductId = require("../../../domain/value_objects/ProductId");
const ProductManager = require("../../persistence/ProductManager");
const CreateProductRequest = require("./CreateProductRequest");
const CreateProductResponse = require("./CreateProductResponse");

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
	 * @param {Promise<CreateProductRequest>} createProductRequest
	 */
	async execute(createProductRequest) {
		const productId = ProductId.generate();
		await this.#productManager.save(new Product({
			id: productId,
			title: createProductRequest.getTitle(),
			description: createProductRequest.getDescription(),
			code: createProductRequest.getCode(),
			price: createProductRequest.getPrice(),
			status: createProductRequest.getStatus(),
			stock: createProductRequest.getStock(),
			category: createProductRequest.getCategory(),
			thumbnails: createProductRequest.getThumbnails()
		}));
		return new CreateProductResponse(productId);
	}
}

module.exports = CreateProductUseCase;
