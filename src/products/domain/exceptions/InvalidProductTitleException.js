const InvalidProductPropertyException = require("./InvalidProductPropertyException");

class InvalidProductTitleException extends InvalidProductPropertyException {
	/**
	 * @returns {InvalidProductTitleException}
	 */
	static getTitleCannotBeEmpty() {
		return new InvalidProductTitleException('Product title cannot be empty.');
	}

	/**
	 * @param {number} maxLength
	 * @returns {InvalidProductTitleException}
	 */
	static getTitleExceedsMaxLength(maxLength) {
		return new InvalidProductTitleException(`Product title cannot exceed ${maxLength} characters.`);
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductTitleException;
