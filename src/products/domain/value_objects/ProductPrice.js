const InvalidProductPriceException = require("../exceptions/InvalidProductPriceException");

class ProductPrice {
	#value;

	/**
	 * @param {number} value 
	 */
	constructor(value) {
		this.#validateValue(value);
		this.#value = value;
	}

	/**
	 * @returns {number}
	 */
	getValue() {
		return this.#value;
	}

	/**
	 * @param {ProductPrice} other
	 * @returns {boolean}
	 */
	isEqual(other) {
		return this.#value === other.getValue();
	}

	#validateValue(value) {
		if (typeof value !== 'number' || isNaN(value)) {
			throw InvalidProductPriceException.getInvalidType();
		}
		if (value < 0) {
			throw InvalidProductPriceException.getPriceCannotBeNegative();
		}
	}
}

module.exports = ProductPrice;
