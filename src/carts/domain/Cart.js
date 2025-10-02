const CartId = require("./value_objects/CartId");
const CartProduct = require("./value_objects/CartProduct");

class Cart {
	/**
	 * @param {Object} json
	 * @returns {Cart}
	 */
	static fromJson(json) {
		const id = new CartId(json.id);
		const products = json.products.map(productJson => CartProduct.fromJson(productJson));
		return new Cart({ id, products: this.#createProductMap(products) });
	}

	#id;
	#products;

	/**
	 * @param {Object} param
	 * @param {CartId} param.id
	 * @param {Map<string, CartProduct>} param.products
	 */
	constructor({ id, products = new Map() }) {
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
	 * @param {CartProduct} cartProduct
	 */
	addProduct(cartProduct) {
		const previousCartProduct = this.#products.get(cartProduct.getProductId().getValue());
		if (previousCartProduct) {
			const newQuantity = previousCartProduct.getQuantity() + cartProduct.getQuantity();
			this.#products.set(cartProduct.getProductId().getValue(), new CartProduct({
				productId: cartProduct.getProductId(),
				quantity: newQuantity
			}));
		} else {
			this.#products.set(cartProduct.getProductId().getValue(), cartProduct);
		}
	}

	toJson() {
		return {
			id: this.#id.getValue(),
			products: this.#products.map(product => product.toJson())
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

		if (this.#products.length !== other.#products.length) {
			return false;
		}

		for (let i = 0; i < this.#products.length; i++) {
			if (!this.#products[i].isEqual(other.#products[i])) {
				return false;
			}
		}

		return true;
	}

	/**
	 * @param {CartProduct[]} products 
	 */
	static #createProductMap(products) {
		const map = new Map();
		for (const product of products) {
			map.set(product.getProductId().getValue(), product);
		}
		return map;
	}
}

module.exports = Cart;
