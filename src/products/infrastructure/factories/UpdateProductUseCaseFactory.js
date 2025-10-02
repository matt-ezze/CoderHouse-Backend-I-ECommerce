const UpdateProductUseCase = require("../../application/use_cases/update_product/UpdateProductUseCase");
const FileSystemProductManager = require("../persistence/FileSystemProductManager");
const { PRODUCT_DB_PATH } = require("../../../config");

class UpdateProductUseCaseFactory {
	static #instance = null;

	/**
	 * @returns {UpdateProductUseCase}
	 */
	static getInstance() {
		if (!this.#instance) {
			this.#instance = new UpdateProductUseCase(this.#getDbInstance());
		}
		return this.#instance;
	}

	static #getDbInstance() {
		return new FileSystemProductManager(PRODUCT_DB_PATH);
	}
}

module.exports = UpdateProductUseCaseFactory;
