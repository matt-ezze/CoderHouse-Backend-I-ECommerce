const CartManager = require("../../persistence/CartManager");
const CartNotFoundException = require("../exceptions/CartNotFoundException");
const AddProductToCartRequest = require("./AddProductToCartRequest");

class AddProductToCartUseCase {
	#cartManager;

	/**
	 * @param {CartManager} cartManager 
	 */
	constructor(cartManager) {
		this.#cartManager = cartManager;
	}

	/**
	 * @param {AddProductToCartRequest} request
	 */
	async execute(request) {
		const previousCart = await this.#cartManager.findById(request.getCartId());
		if (!previousCart) {
			throw new CartNotFoundException(request.getCartId());
		}
		const updatedCart = previousCart.addProduct(request.getProduct());
		if (!updatedCart.isEqual(previousCart)) {
			await this.#cartManager.save(updatedCart);
		}
	}
}

module.exports = AddProductToCartUseCase;
