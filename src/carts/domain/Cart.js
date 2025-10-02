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
		return new Cart(id, products);
	}

	#id;
	#products;

	/**
	 * @param {Object} param
	 * @param {CartId} param.id
	 * @param {CartProduct[]} param.products
	 */
	constructor({ id, products = [] }) {
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
	 * @returns {CartProduct[]}
	 */
	getProducts() {
		return this.#products;
	}

	/**
	 * @param {CartProduct[]} [products]
	 * @returns {Cart}
	 */
	updateProducts(products) {
		return products !== undefined
			? new Cart({ id: this.#id, products })
			: this;
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
}

module.exports = Cart;
