const InvalidProductDescriptionException = require("../exceptions/InvalidProductDescriptionException");

class ProductDescription {
	static MAX_LENGTH = 2000;

	#value;

	/**
	 * @param {string|null} [value]
	 */
	constructor(value) {
		if (value === undefined || value === null) {
			value = '';
		} else {
			this.#validateValue(value);
		}
		this.#value = value;
	}

	/**
	 * @returns {string}
	 */
	getValue() {
		return this.#value;
	}

	isEmpty() {
		return this.#value.length === 0;
	}

	/**
	 * 
	 * @param {ProductDescription} other 
	 * @returns {boolean}
	 */
	isEqual(other) {
		return this.#value === other.#value;
	}

	#validateValue(value) {
		if (typeof value !== "string") {
			throw InvalidProductDescriptionException.getDescriptionIsNotAString();
		}
		if (value.length > ProductDescription.MAX_LENGTH) {
			throw InvalidProductDescriptionException.getDescriptionExceedsMaxLength(ProductDescription.MAX_LENGTH);
		}
	}
}

module.exports = ProductDescription;
