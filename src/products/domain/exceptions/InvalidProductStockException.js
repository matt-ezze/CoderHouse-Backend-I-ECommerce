const InvalidProductPropertyException = require("./InvalidProductPropertyException");

class InvalidProductStockException extends InvalidProductPropertyException {
	static getProductStockCannotBeNegative() {
		return new InvalidProductStockException("Product stock cannot be negative");
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductStockException;
