const { CART_DB_PATH } = require("../../../config");
const OnProductDeletedHandler = require("../../application/events/on_product_deleted/OnProductDeletedHandler");
const FileSystemCartManager = require("../persistence/FileSystemCartManager");

class OnProductDeletedHandlerFactory {
	static #instance = null;

	/**
	 * @returns {OnProductDeletedHandler}
	 */
	static getInstance() {
		if (this.#instance === null) {
			this.#instance = new OnProductDeletedHandler(this.#getDbInstance());
		}
		return this.#instance;
	}

	static #getDbInstance() {
		return new FileSystemCartManager(CART_DB_PATH);
	}
}

module.exports = OnProductDeletedHandlerFactory;
