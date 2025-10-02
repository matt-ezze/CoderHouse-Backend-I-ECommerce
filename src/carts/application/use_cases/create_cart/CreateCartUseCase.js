const Cart = require("../../../domain/Cart");
const CartId = require("../../../domain/value_objects/CartId");
const CartManager = require("../../persistence/CartManager");
const CreateCartRequest = require("./CreateCartRequest");
const CreateCartResponse = require("./CreateCartResponse");

class CreateCartUseCase {
	#cartManager;

	/**
	 * 
	 * @param {CartManager} cartManager 
	 */
	constructor(cartManager) {
		this.#cartManager = cartManager;
	}

	/**
	 * @param {Promise<CreateCartRequest>} request
	 */
	async execute(request) {
		const cartId = CartId.generate();
		this.#cartManager.save(new Cart({
			id: cartId,
			products: request.getProducts()
		}));
		return new CreateCartResponse(cartId);
	}
}

module.exports = CreateCartUseCase;
