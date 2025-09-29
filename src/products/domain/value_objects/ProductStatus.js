class ProductStatus {
	#value;

	/**
	 * @param {boolean} value 
	 */
	constructor(value) {
		this.#value = value;
	}

	/**
	 * @returns {boolean}
	 */
	getValue() {
		return this.#value;
	}

	/**
	 * @param {ProductStatus} other 
	 * @returns {boolean}
	 */
	isEqual(other) {
		return this.#value === other.getValue();
	}
}

module.exports = ProductStatus;
