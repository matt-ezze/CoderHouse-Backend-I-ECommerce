const CartId = require("../../../domain/value_objects/CartId");

class CartNotFoundException extends Error {
	/**
	 * @param {CartId} cartIdNotFound 
	 */
	constructor(cartIdNotFound) {
		super(`Cart with ID ${cartIdNotFound.getValue()} not found`);
		this.name = this.constructor.name;
	}
}

module.exports = CartNotFoundException;
