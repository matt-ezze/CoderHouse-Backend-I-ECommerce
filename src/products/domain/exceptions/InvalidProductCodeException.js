const InvalidProductPropertyException = require("./InvalidProductPropertyException");

class InvalidProductCodeException extends InvalidProductPropertyException {
	static getCodeIsNotAString() {
		return new InvalidProductCodeException("Product code must be a string.");
	}

	static getCodeIsEmpty() {
		return new InvalidProductCodeException("Product code cannot be empty.");
	}

	static getCodeExceedsMaxLength(maxLength) {
		return new InvalidProductCodeException(`Product code exceeds maximum length of ${maxLength} characters.`);
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductCodeException;
