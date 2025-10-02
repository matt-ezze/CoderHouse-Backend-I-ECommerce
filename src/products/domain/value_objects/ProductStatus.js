const InvalidProductStatusException = require("../exceptions/InvalidProductStatusException");

class ProductStatus {
	#value;

	/**
	 * @param {boolean} value 
	 */
	constructor(value) {
		this.#validateValue(value);
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

	#validateValue(value) {
		if (typeof value !== 'boolean') {
			throw InvalidProductStatusException.getInvalidType();
		}
	}
}

module.exports = ProductStatus;
