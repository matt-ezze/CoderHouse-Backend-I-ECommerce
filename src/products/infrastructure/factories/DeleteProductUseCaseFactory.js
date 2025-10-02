const { PRODUCT_DB_PATH } = require("../../../config");
const DeleteProductUseCase = require("../../application/use_cases/delete_product/DeleteProductUseCase");
const FileSystemProductManager = require("../persistence/FileSystemProductManager");

class DeleteProductUseCaseFactory {
	static #instance = null;

	/**
	 * @returns {DeleteProductUseCase}
	 */
	static getInstance() {
		if (!this.#instance) {
			this.#instance = new DeleteProductUseCase(this.#getDbInstance());
		}
		return this.#instance;
	}

	static #getDbInstance() {
		return new FileSystemProductManager(PRODUCT_DB_PATH);
	}
}

module.exports = DeleteProductUseCaseFactory;
