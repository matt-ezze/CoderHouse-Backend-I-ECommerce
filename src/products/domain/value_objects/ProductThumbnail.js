class ProductThumbnail {
	#value;

	/**
	 * @param {URL} value 
	 */
	constructor(value) {
		this.#value = value;
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
