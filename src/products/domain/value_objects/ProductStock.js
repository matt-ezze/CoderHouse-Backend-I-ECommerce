const InvalidProductStockException = require("../exceptions/InvalidProductStockException");

class ProductStock {
	#value;

	/**
	 * @param {number} value 
	 */
	constructor(value) {
		this.#validateValue(value);
		this.#value = value;
	}

	/**
	 * @return {number}
	 */
	getValue() {
		return this.#value;
	}

	/**
	 * @param {ProductStock} other 
	 * @returns 
	 */
	isEqual(other) {
		return this.#value === other.getValue();
	}

	#validateValue(value) {
		if (typeof value !== 'number' || isNaN(value)) {
			throw InvalidProductStockException.getProductStockMustBeNumber();
		}
		if (value < 0) {
			throw InvalidProductStockException.getProductStockCannotBeNegative();
		}
	}
}

module.exports = ProductStock;
