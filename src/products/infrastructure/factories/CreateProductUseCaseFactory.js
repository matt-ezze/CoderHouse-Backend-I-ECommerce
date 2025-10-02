const CreateProductUseCase = require("../../application/use_cases/create_product/CreateProductUseCase");
const FileSystemProductManager = require("../persistence/FileSystemProductManager");
const { PRODUCT_DB_PATH } = require("../../../config");

class CreateProductUseCaseFactory {
	static #instance = null;

	/**
	 * @returns {CreateProductUseCase}
	 */
	static getInstance() {
		if (!this.#instance) {
			this.#instance = new CreateProductUseCase(this.#getDbInstance());
		}
		return this.#instance;
	}

	static #getDbInstance() {
		return new FileSystemProductManager(PRODUCT_DB_PATH);
	}
}

module.exports = CreateProductUseCaseFactory;
