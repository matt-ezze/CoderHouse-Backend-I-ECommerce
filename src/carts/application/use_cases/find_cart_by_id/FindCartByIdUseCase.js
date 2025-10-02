const CartManager = require("../../persistence/CartManager");
const CartNotFoundException = require("../exceptions/CartNotFoundException");
const FindCartByIdRequest = require("./FindCartByIdRequest");
const FindCartByIdResponse = require("./FindCartByIdResponse");

class FindCartByIdUseCase {
	#cartManager;

	/**
	 * @param {CartManager} cartManager 
	 */
	constructor(cartManager) {
		this.#cartManager = cartManager;
	}

	/**
	 * @param {FindCartByIdRequest} request
	 * @returns {Promise<FindCartByIdResponse>}
	 */
	async execute(request) {
		const cart = await this.#cartManager.findById(request.getCartId());
		if (!cart) {
			throw new CartNotFoundException(request.getCartId());
		}

		return new FindCartByIdResponse(cart);
	}
}

module.exports = FindCartByIdUseCase;
