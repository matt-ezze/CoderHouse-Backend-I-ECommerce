const InvalidProductPropertyException = require("./InvalidProductPropertyException");

class InvalidProductDescriptionException extends InvalidProductPropertyException {
	static getDescriptionExceedsMaxLength(maxLength) {
		return new InvalidProductDescriptionException(`Product description cannot exceed ${maxLength} characters.`);
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductDescriptionException;
