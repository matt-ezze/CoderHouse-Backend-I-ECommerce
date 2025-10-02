const FindAllProductsUseCase = require("../../application/use_cases/find_all_products/FindAllProductsUseCase");
const FileSystemProductManager = require("../persistence/FileSystemProductManager");

class FindAllProductsUseCaseFactory {
	static #instance;

	/**
	 * @returns {FindAllProductsUseCase}
	 */
	static getInstance() {
		if (!this.#instance) {
			this.#instance = new FindAllProductsUseCase(this.#getDbInstance());
		}
		return this.#instance;
	}

	static #getDbInstance() {
		return new FileSystemProductManager(process.env.DB_PATH);
	}
}

module.exports = FindAllProductsUseCaseFactory;
