class InvalidProductStockException extends Error {
	static getProductStockCannotBeNegative() {
		return new InvalidProductStockException("Product stock cannot be negative");
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductStockException;
