const FindCartByIdUseCase = require("../../application/use_cases/find_cart_by_id/FindCartByIdUseCase");
const FileSystemCartManager = require("../persistence/FileSystemCartManager");
const { CART_DB_PATH } = require("../../../config");

class FindCartByIdUseCaseFactory {
	static #instance;

	/**
	 * @returns {FindCartByIdUseCase}
	 */
	static getInstance() {
		if (!this.#instance) {
			this.#instance = new FindCartByIdUseCase(this.#getDbInstance());
		}
		return this.#instance;
	}

	static #getDbInstance() {
		return new FileSystemCartManager(CART_DB_PATH);
	}
}

module.exports = FindCartByIdUseCaseFactory;
