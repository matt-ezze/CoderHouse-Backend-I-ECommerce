class ProductThumbnail {
	#value;

	/**
	 * @param {string|URL} value 
	 */
	constructor(value) {
		this.#value = typeof value === 'string' ? new URL(value) : value;
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
}

module.exports = ProductThumbnail;
