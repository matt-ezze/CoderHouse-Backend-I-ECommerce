const InvalidProductTitleException = require("../exceptions/InvalidProductTitleException");

class ProductTitle {
	#value;

	static MAX_LENGTH = 255;

	/**
	 * @param {string} value
	 */
	constructor(value) {
		this.#validateValue(value);
		this.#value = value;
	}

	/**
	 * @returns {string}
	 */
	getValue() {
		return this.#value;
	}

	/**
	 * @param {ProductTitle} other
	 * @returns {boolean}
	 */
	isEqual(other) {
		return this.#value === other.#value;
	}

	#validateValue(value) {
		if (typeof value !== 'string') {
			throw InvalidProductTitleException.getTitleMustBeString();
		}
		if (value.length === 0) {
			throw InvalidProductTitleException.getTitleCannotBeEmpty();
		}
		if (value.length > ProductTitle.MAX_LENGTH) {
			throw InvalidProductTitleException.getTitleExceedsMaxLength(ProductTitle.MAX_LENGTH);
		}
	}
}

module.exports = ProductTitle;
