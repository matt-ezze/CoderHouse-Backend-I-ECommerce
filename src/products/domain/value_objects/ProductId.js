class ProductId {
	#value;

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
	 * @param {ProductId} other
	 * @returns {boolean}
	 */
	isEqual(other) {
		return this.#value === other.#value;
	}
}

module.exports = ProductId;
