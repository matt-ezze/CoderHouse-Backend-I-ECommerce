const InvalidCartProductException = require("../exceptions/InvalidCartProductException");

class CartProduct {
	#id;
	#quantity;

	/**
	 * @param {Object} json 
	 */
	static fromJson(json) {
		return new CartProduct(json.id, json.quantity);
	}

	/**
	 * @param {string} id
	 * @param {number} quantity
	 */
	constructor(id, quantity) {
		this.#validateId(id);
		this.#validateQuantity(quantity);
		this.#id = id;
		this.#quantity = quantity;
	}

	/**
	 * @returns {string}
	 */
	getId() {
		return this.#id;
	}

	/**
	 * @returns {number}
	 */
	getQuantity() {
		return this.#quantity;
	}

	/**
	 * @param {CartProduct} other 
	 * @returns {boolean}
	 */
	isEqual(other) {
		return this.#id === other.#id &&
			this.#quantity === other.#quantity;
	}

	toJson() {
		return {
			id: this.#id,
			quantity: this.#quantity
		};
	}

	#validateId(id) {
		if (typeof id !== 'string') {
			throw InvalidCartProductException.getIdNotAString();
		}
	}

	#validateQuantity(quantity) {
		if (typeof quantity !== 'number') {
			throw InvalidCartProductException.getQuantityNotANumber();
		}

		if (!Number.isInteger(quantity)) {
			throw InvalidCartProductException.getQuantityNotAnInteger();
		}

		if (quantity < 0) {
			throw InvalidCartProductException.getQuantityIsNegative();
		}
	}
}

module.exports = CartProduct;
