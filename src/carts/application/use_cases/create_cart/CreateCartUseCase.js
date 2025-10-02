const Cart = require("../../../domain/Cart");
const CartId = require("../../../domain/value_objects/CartId");
const CartManager = require("../../persistence/CartManager");
const CreateCartRequest = require("./CreateCartRequest");

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
	 * @param {CreateCartRequest} request
	 */
	async execute(request) {
		this.#cartManager.save(new Cart({
			id: CartId.generate(),
			products: request.getProducts()
		}));
	}
}

module.exports = CreateCartUseCase;
