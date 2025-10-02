const InvalidProductPropertyException = require("./InvalidProductPropertyException");

class InvalidProductCategory extends InvalidProductPropertyException {
	static getCategoryNotAString() {
		return new InvalidProductCategory("Category must be a string.");
	}

	static getCategoryIsEmpty() {
		return new InvalidProductCategory("Category cannot be empty.");
	}

	static getCategoryExceedsMaxLength(maxLength) {
		return new InvalidProductCategory(`Category exceeds maximum length of ${maxLength} characters.`);
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductCategory;
