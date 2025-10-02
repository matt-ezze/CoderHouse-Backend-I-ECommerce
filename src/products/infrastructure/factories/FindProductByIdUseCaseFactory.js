const FindProductByIdUseCase = require("../../application/use_cases/find_product_by_id/FindProductByIdUseCase");
const FileSystemProductManager = require("../persistence/FileSystemProductManager");

class FindProductByIdUseCaseFactory {
	static #instance = null;

	/**
	 * @returns {FindProductByIdUseCase}
	 */
	static getInstance() {
		if (!this.#instance) {
			this.#instance = new FindProductByIdUseCase(this.#getDbInstance());
		}
		return this.#instance;
	}

	static #getDbInstance() {
		return new FileSystemProductManager(process.env.DB_PATH);
	}
}

module.exports = FindProductByIdUseCaseFactory;
