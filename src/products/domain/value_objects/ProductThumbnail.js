const InvalidProductThumbnail = require("../exceptions/InvalidProductThumbnail");

class ProductThumbnail {
	#value;

	/**
	 * @param {string|URL} value 
	 */
	constructor(value) {
		this.#validateValue(value);
		this.#value = new URL(value);
	}

	/**
	 * @return {URL}
	 */
	getValue() {
		return this.#value;
	}

	/**
	 * @param {ProductThumbnail} other
	 * @return {boolean}
	 */
	isEqual(other) {
		return this.#value === other.getValue();
	}

	#validateValue(value) {
		try {
			new URL(value);
		} catch (e) {
			throw InvalidProductThumbnail.getProductThumbnailIsAnInvalidUrl();
		}
	}
}

module.exports = ProductThumbnail;
