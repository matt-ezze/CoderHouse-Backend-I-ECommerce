const CartManager = require("../../persistence/CartManager");
const OnProductDeletedRequest = require("./OnProductDeletedRequest");

class OnProductDeletedHandler {
	#cartManager;

	/**
	 * @param {CartManager} cartManager 
	 */
	constructor(cartManager) {
		this.#cartManager = cartManager;
	}

	/**
	 * @param {OnProductDeletedRequest} request
	 */
	async handle(request) {
		const previousCarts = await this.#cartManager.findAllCartsWithProduct(request.getProductId());
		const updatedCarts = previousCarts.map(cart => cart.removeProduct(request.getProductId()));
		const filteredCarts = updatedCarts.filter((cart, index) => !cart.isEqual(previousCarts[index]));
		await Promise.all(filteredCarts.map(cart => this.#cartManager.save(cart)));
	}
}

module.exports = OnProductDeletedHandler;
