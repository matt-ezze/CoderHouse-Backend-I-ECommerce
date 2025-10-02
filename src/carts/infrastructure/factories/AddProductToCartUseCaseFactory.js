const AddProductToCartUseCase = require("../../application/use_cases/add_product_to_cart/AddProductToCartUseCase");
const FileSystemCartManager = require("../persistence/FileSystemCartManager");
const { CART_DB_PATH } = require("../../../config");

class AddProductToCartUseCaseFactory {
	static #instance;

	/**
	 * @returns {AddProductToCartUseCase}
	 */
	static getInstance() {
		if (!this.#instance) {
			this.#instance = new AddProductToCartUseCase(this.#getDbInstance());
		}
		return this.#instance;
	}

	static #getDbInstance() {
		return new FileSystemCartManager(CART_DB_PATH);
	}
}

module.exports = AddProductToCartUseCaseFactory;
