const ProductId = require("../../products/domain/value_objects/ProductId");
const CartId = require("./value_objects/CartId");
const CartProduct = require("./value_objects/CartProduct");

class Cart {
	/**
	 * @param {Object} json
	 * @returns {Cart}
	 */
	static fromJson(json) {
		const id = new CartId(json.id);
		const products = Object
			.entries(json.products)
			.map(([productId, quantity]) => [productId, new CartProduct(productId, quantity)]);
		return new Cart({ id, products: new Map(products) });
	}

	#id;
	#products;

	/**
	 * @param {Object} param
	 * @param {CartId} param.id
	 * @param {Map<string, CartProduct>} param.products
	 */
	constructor({ id, products }) {
		this.#id = id;
		this.#products = products;
	}

	/**
	 * @returns {CartId}
	 */
	getId() {
		return this.#id;
	}

	/**
	 * @returns {Map<string, CartProduct>}
	 */
	getProducts() {
		return this.#products;
	}

	/**
	 * @param {ProductId} productId
	 * @returns {boolean}
	 */
	hasProduct(productId) {
		return this.#products.has(productId.getValue());
	}

	/**
	 * @param {CartProduct} cartProduct
	 * @returns {Cart}
	 */
	addProduct(cartProduct) {
		const updatedProducts = new Map(this.#products);
		const previousCartProduct = updatedProducts.get(cartProduct.getId());
		if (previousCartProduct) {
			const newQuantity = previousCartProduct.getQuantity() + cartProduct.getQuantity();
			updatedProducts.set(cartProduct.getId(), new CartProduct(cartProduct.getId(), newQuantity));
		} else {
			updatedProducts.set(cartProduct.getId(), cartProduct);
		}
		return new Cart({ id: this.#id, products: updatedProducts });
	}

	/**
	 * @param {ProductId} productId
	 */
	removeProduct(productId) {
		if (!this.#products.has(productId.getValue())) {
			return this;
		}
		const updatedProducts = new Map(this.#products);
		updatedProducts.delete(productId.getValue());
		return new Cart({ id: this.#id, products: updatedProducts });
	}

	toJson() {
		return {
			id: this.#id.getValue(),
			products: Object.fromEntries(
				Array
					.from(this.#products.entries())
					.map(([productId, product]) => ([
						productId,
						product.getQuantity()
					]))
			)
		};
	}

	/**
	 * @param {Cart} other
	 * @returns {boolean}
	 */
	isEqual(other) {
		if (!this.#id.isEqual(other.#id)) {
			return false;
		}
		if (this.#products.size !== other.#products.size) {
			return false;
		}
		for (const [key, value] of this.#products.entries()) {
			if (!value.isEqual(other.#products.get(key))) {
				return false;
			}
		}
		return true;
	}
}

module.exports = Cart;
