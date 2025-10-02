const CartId = require("../../../domain/value_objects/CartId");
const CartProduct = require("../../../domain/value_objects/CartProduct");

class AddProductToCartRequest {
	#cartId;
	#cartProduct;

	static fromJson(json) {
		return new AddProductToCartRequest(
			new CartId(json.cartId),
			CartProduct.fromJson(json.product)
		);
	}

	/**
	 * @param {CartId} cartId
	 * @param {CartProduct} cartProduct 
	 */
	constructor(cartId, cartProduct) {
		this.#cartId = cartId;
		this.#cartProduct = cartProduct;
	}

	/**
	 * @returns {CartId}
	 */
	getCartId() {
		return this.#cartId;
	}

	/**
	 * @returns {CartProduct}
	 */
	getProduct() {
		return this.#cartProduct;
	}
}

module.exports = AddProductToCartRequest;
