const InvalidProductPropertyException = require("./InvalidProductPropertyException");

class InvalidProductPriceException extends InvalidProductPropertyException {
	static getPriceCannotBeNegative() {
		return new InvalidProductPriceException('Product price cannot be negative.');
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductPriceException;
