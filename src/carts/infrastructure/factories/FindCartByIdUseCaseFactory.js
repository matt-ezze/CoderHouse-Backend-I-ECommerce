const FindCartByIdUseCase = require("../../application/use_cases/find_cart_by_id/FindCartByIdUseCase");
const FileSystemCartManager = require("../persistence/FileSystemCartManager");

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
		return new FileSystemCartManager(process.env.CARTS_PATH);
	}
}

module.exports = FindCartByIdUseCaseFactory;
