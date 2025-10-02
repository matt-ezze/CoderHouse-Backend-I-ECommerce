const InvalidProductPropertyException = require("./InvalidProductPropertyException");

class InvalidProductCategory extends InvalidProductPropertyException {
	static getCategoryExceedsMaxLength(maxLength) {
		return new InvalidProductCategory(`Category exceeds maximum length of ${maxLength} characters.`);
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductCategory;
