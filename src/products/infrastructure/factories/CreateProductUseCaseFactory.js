const CreateProductUseCase = require("../../application/use_cases/create_product/CreateProductUseCase");
const FileSystemProductManager = require("../persistence/FileSystemProductManager");

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
		return new FileSystemProductManager(process.env.DB_PATH);
	}
}

module.exports = CreateProductUseCaseFactory;
