const ProductNotFoundException = require("../exceptions/ProductNotFoundException");
const FindProductResponse = require("./FindProductByIdResponse");

class FindProductByIdUseCase {
	#productManager;

	constructor(productManager) {
		this.#productManager = productManager;
	}

	async execute(request) {
		const product = await this.#productManager.findById(request.getId());
		if (!product) {
			throw new ProductNotFoundException(request.getId());
		}
		return new FindProductResponse(product);
	}
}

module.exports = FindProductByIdUseCase;
