const InvalidProductPropertyException = require("./InvalidProductPropertyException");

class InvalidProductStatusException extends InvalidProductPropertyException {
	static getInvalidType() {
		return new InvalidProductStatusException("Product status must be a boolean.");
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductStatusException;
