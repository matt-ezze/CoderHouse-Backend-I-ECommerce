const Cart = require('../../domain/Cart');
const CartId = require('../../domain/value_objects/CartId');
const CartManager = require("../../application/persistence/CartManager");
const fs = require('fs');

class FileSystemCartManager extends CartManager {
	#path;

	/**
	 * @param {string} path 
	 */
	constructor(path) {
		super();
		this.#path = path;
	}

	/**
	 * @override
	 * @param {Cart} cart
	 * @return {Promise<void>}
	 */
	async save(cart) {
		const carts = await this.#loadDbFile();
		carts[cart.getId().getValue()] = cart.toJson();
		await this.#writeDbFile(carts);
	}

	/**
	 * @override
	 * @param {CartId} cartId
	 * @return {Promise<Cart|null>}
	 */
	async findById(cartId) {
		const carts = await this.#loadDbFile();
		const cartData = carts[cartId.getValue()];
		if (!cartData) {
			return null;
		}
		return Cart.fromJson(cartData);
	}

	async #loadDbFile() {
		const data = await fs.promises.readFile(this.#path);
		return JSON.parse(data);
	}

	async #writeDbFile(data) {
		await fs.promises.writeFile(this.#path, JSON.stringify(data));
	}
}

module.exports = FileSystemCartManager;
