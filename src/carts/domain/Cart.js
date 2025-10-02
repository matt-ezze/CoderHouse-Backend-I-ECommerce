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
		return new Cart({ id, products });
	}

	#id;
	#products;

	/**
	 * @param {Object} param
	 * @param {CartId} param.id
	 * @param {CartProduct[]|Map<string, CartProduct>} param.products
	 */
	constructor({ id, products }) {
		this.#id = id;
		this.#products = Array.isArray(products)
			? this.#createProductMap(products)
			: products;
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
	 * @returns {Cart}
	 */
	addProduct(cartProduct) {
		const updatedProducts = new Map(this.#products);
		const previousCartProduct = updatedProducts.get(cartProduct.getProductId().getValue());
		if (previousCartProduct) {
			const newQuantity = previousCartProduct.getQuantity() + cartProduct.getQuantity();
			updatedProducts.set(cartProduct.getProductId().getValue(), new CartProduct({
				productId: cartProduct.getProductId(),
				quantity: newQuantity
			}));
		} else {
			updatedProducts.set(cartProduct.getProductId().getValue(), cartProduct);
		}
		return new Cart({ id: this.#id, products: updatedProducts });
	}

	toJson() {
		return {
			id: this.#id.getValue(),
			products: Array.from(this.#products.values()).map(product => product.toJson())
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
	#createProductMap(products) {
		const map = new Map();
		for (const product of products) {
			map.set(product.getProductId().getValue(), product);
		}
		return map;
	}
}

module.exports = Cart;
