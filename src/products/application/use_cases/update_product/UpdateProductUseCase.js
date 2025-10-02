const Product = require("../../../domain/Product");
const ProductManager = require("../../persistence/ProductManager");
const ProductNotFoundException = require("../exceptions/ProductNotFoundException");
const UpdateProductRequest = require("./UpdateProductRequest");

class UpdateProductUseCase {
	#productManager;

	/**
	 * 
	 * @param {ProductManager} productManager
	 */
	constructor(productManager) {
		this.#productManager = productManager;
	}

	/**
	 * @param {UpdateProductRequest} updateProductRequest
	 */
	async execute(updateProductRequest) {
		const previousProduct = await this.#productManager.findById(updateProductRequest.getId());
		if (!previousProduct) {
			throw new ProductNotFoundException(updateProductRequest.getId());
		}
		const updatedProduct = this.#updateProductFieldsIfNecessary(previousProduct, updateProductRequest);
		if (!updatedProduct.isEqual(previousProduct)) {
			this.#productManager.save(updatedProduct);
		}
	}

	/**
	 * @param {Product} previousProduct
	 * @param {UpdateProductRequest} updateProductRequest
	 * @return {Product}
	 */
	#updateProductFieldsIfNecessary(previousProduct, updateProductRequest) {
		return previousProduct
			.updateTitle(updateProductRequest.getTitle())
			.updateDescription(updateProductRequest.getDescription())
			.updatePrice(updateProductRequest.getPrice())
			.updateStatus(updateProductRequest.getStatus())
			.updateStock(updateProductRequest.getStock())
			.updateCategory(updateProductRequest.getCategory())
			.updateThumbnails(updateProductRequest.getThumbnails());
	}
}

module.exports = UpdateProductUseCase;
