const UpdateProductUseCase = require("../../application/use_cases/update_product/UpdateProductUseCase");
const FileSystemProductManager = require("../persistence/FileSystemProductManager");

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
		return new FileSystemProductManager(process.env.DB_PATH);
	}
}

module.exports = UpdateProductUseCaseFactory;
