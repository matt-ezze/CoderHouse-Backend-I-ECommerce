const crypto = require('crypto');

class CartId {
	#value;

	/**
	 * @returns {CartId}
	 */
	static generate() {
		return new CartId(crypto.randomUUID());
	}

	/**
	 * @param {string} value
	 */
	constructor(value) {
		this.#value = value;
	}

	/**
	 * @returns {string}
	 */
	getValue() {
		return this.#value;
	}

	/**
	 * @param {CartId} other
	 * @returns {boolean}
	 */
	isEqual(other) {
		return this.#value === other.#value;
	}
}

module.exports = CartId;
