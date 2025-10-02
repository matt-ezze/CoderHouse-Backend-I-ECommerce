const CreateCartUseCase = require("../../application/use_cases/create_cart/CreateCartUseCase");
const FileSystemCartManager = require("../persistence/FileSystemCartManager");

class CreateCartUseCaseFactory {
	static #instance;

	/**
	 * @returns {CreateCartUseCase}
	 */
	static getInstance() {
		if (!this.#instance) {
			this.#instance = new CreateCartUseCase(this.#getDbInstance());
		}
		return this.#instance;
	}

	static #getDbInstance() {
		return new FileSystemCartManager(process.env.CARTS_PATH);
	}
}

module.exports = CreateCartUseCaseFactory;
