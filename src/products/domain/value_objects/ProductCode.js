const InvalidProductCodeException = require("../exceptions/InvalidProductCodeException");

class ProductCode {
	static MAX_LENGTH = 32;

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
	 * @param {ProductCode} other
	 * @returns {boolean}
	 */
	isEqual(other) {
		return this.#value === other.#value;
	}

	#validateValue(value) {
		if (typeof value !== 'string') {
			throw InvalidProductCodeException.getCodeIsNotAString();
		}
		if (value.trim().length === 0) {
			throw InvalidProductCodeException.getCodeIsEmpty();
		}
		if (value.length > ProductCode.MAX_LENGTH) {
			throw InvalidProductCodeException.getCodeExceedsMaxLength(ProductCode.MAX_LENGTH);
		}
	}
}

module.exports = ProductCode;
