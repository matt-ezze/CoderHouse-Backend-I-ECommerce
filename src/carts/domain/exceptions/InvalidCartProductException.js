const InvalidCartPropertyException = require('./InvalidCartPropertyException');

class InvalidCartProductException extends InvalidCartPropertyException {
	static getIdNotAString() {
		return new InvalidCartProductException('The product id must be a string');
	}

	static getQuantityNotANumber() {
		return new InvalidCartProductException('The product quantity must be a number');
	}

	static getQuantityNotAnInteger() {
		return new InvalidCartProductException('The product quantity must be an integer');
	}

	static getQuantityIsNegative() {
		return new InvalidCartProductException('The product quantity must be a positive integer');
	}
}

module.exports = InvalidCartProductException;
