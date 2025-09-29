const InvalidProductCategory = require("../exceptions/InvalidProductCategory");

class ProductCategory {
	static MAX_LENGTH = 64;

	#value;

	/**
	 * @param {string} value 
	 */
	constructor(value) {
		this.#validateValue(value);
		this.#value = value;
	}

	/**
	 * @return {string}
	 */
	getValue() {
		return this.#value;
	}

	/**
	 * @param {ProductCategory} other
	 * @return {boolean}
	 */
	isEqual(other) {
		return this.#value === other.getValue();
	}

	/**
	 * @param {string} value
	 */
	#validateValue(value) {
		if (value.length > ProductCategory.MAX_LENGTH) {
			throw InvalidProductCategory.getCategoryExceedsMaxLength(ProductCategory.MAX_LENGTH);
		}
	}
}

module.exports = ProductCategory;
