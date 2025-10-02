const ProductId = require('./value_objects/ProductId');
const ProductTitle = require('./value_objects/ProductTitle');
const ProductDescription = require('./value_objects/ProductDescription');
const ProductCode = require('./value_objects/ProductCode');
const ProductPrice = require('./value_objects/ProductPrice');
const ProductStatus = require('./value_objects/ProductStatus');
const ProductStock = require('./value_objects/ProductStock');
const ProductCategory = require('./value_objects/ProductCategory');
const ProductThumbnail = require('./value_objects/ProductThumbnail');

class Product {
	#id;
	#title;
	#description;
	#code;
	#price;
	#status;
	#stock;
	#category;
	#thumbnails;

	static fromJson(productJson) {
		return new Product({
			id: productJson.id ? new ProductId(productJson.id) : ProductId.generate(),
			title: new ProductTitle(productJson.title),
			description: new ProductDescription(productJson.description),
			price: new ProductPrice(productJson.price),
			category: new ProductCategory(productJson.category),
			code: new ProductCode(productJson.code),
			status: new ProductStatus(productJson.status),
			stock: new ProductStock(productJson.stock),
			thumbnails: productJson.thumbnails?.map(thumbnail => new ProductThumbnail(thumbnail)) ?? []
		});
	}

	/**
	 * @param {Object} param
	 * @param {ProductId} param.id
	 * @param {ProductTitle} param.title
	 * @param {ProductDescription} param.description
	 * @param {ProductCode} param.code
	 * @param {ProductPrice} param.price
	 * @param {ProductStatus} param.status
	 * @param {ProductStock} param.stock
	 * @param {ProductCategory} param.category
	 * @param {ProductThumbnail[]} param.thumbnails
	 */
	constructor({ id, title, description, code, price, status, stock, category, thumbnails }) {
		this.#id = id;
		this.#title = title;
		this.#description = description;
		this.#code = code;
		this.#price = price;
		this.#status = status;
		this.#stock = stock;
		this.#category = category;
		this.#thumbnails = thumbnails;
	}

	/**
	 * @returns {ProductId}
	 */
	getId() {
		return this.#id;
	}

	/**
	 * @returns {ProductTitle}
	 */
	getTitle() {
		return this.#title;
	}

	/**
	 * @param {ProductTitle} [newTitle] 
	 * @returns {Product}
	 */
	updateTitle(newTitle) {
		return newTitle
			? new Product({
				...this.#getValues(),
				title: newTitle
			})
			: this;
	}

	/**
	 * @returns {ProductDescription}
	 */
	getDescription() {
		return this.#description;
	}

	/**
	 * @param {ProductDescription} [newDescription]
	 * @returns {Product}
	 */
	updateDescription(newDescription) {
		return newDescription
			? new Product({
				...this.#getValues(),
				description: newDescription
			})
			: this;
	}

	/**
	 * @returns {ProductCode}
	 */
	getCode() {
		return this.#code;
	}

	/**
	 * @returns {ProductPrice}
	 */
	getPrice() {
		return this.#price;
	}

	/**
	 * @param {ProductPrice} [newPrice]
	 * @returns {Product}
	 */
	updatePrice(newPrice) {
		return newPrice
			? new Product({
				...this.#getValues(),
				price: newPrice
			})
			: this;
	}

	/**
	 * @returns {ProductStatus}
	 */
	getStatus() {
		return this.#status;
	}

	/**
	 * @param {boolean} [newStatus]
	 * @returns {Product}
	 */
	updateStatus(newStatus) {
		return newStatus
			? new Product({
				...this.#getValues(),
				status: newStatus
			})
			: this;
	}

	/**
	 * @returns {ProductStock}
	 */
	getStock() {
		return this.#stock;
	}

	/**
	 * @param {ProductStock} [newStock]
	 * @returns {Product}
	 */
	updateStock(newStock) {
		return newStock
			? new Product({
				...this.#getValues(),
				stock: newStock
			})
			: this;
	}

	/**
	 * @returns {ProductCategory}
	 */
	getCategory() {
		return this.#category;
	}

	/**
	 * @param {ProductCategory} [newCategory]
	 * @returns {Product}
	 */
	updateCategory(newCategory) {
		return newCategory
			? new Product({
				...this.#getValues(),
				category: newCategory
			})
			: this;
	}

	/**
	 * @returns {ProductThumbnail[]}
	 */
	getThumbnails() {
		return [...this.#thumbnails];
	}

	/**
	 * @param {ProductThumbnail[]} [newThumbnails]
	 * @returns {Product}
	 */
	updateThumbnails(newThumbnails) {
		return newThumbnails
			? new Product({
				...this.#getValues(),
				thumbnails: newThumbnails
			})
			: this;
	}

	isEqual(other) {
		return Object.entries(this.#getValues()).every(([key, value]) => {
			const otherValue = other.#getValues()[key];
			if (Array.isArray(value) && Array.isArray(otherValue)) {
				if (value.length !== otherValue.length) {
					return false;
				}
				return value.every((v, index) => v.isEqual(otherValue[index]));
			}
			return value.isEqual(otherValue);
		});
	}

	toJson() {
		return Object.fromEntries(
			Object.entries(this.#getValues()).map(([key, value]) => {
				if (Array.isArray(value)) {
					return [key, value.map(v => v.getValue())];
				}
				return [key, value.getValue()];
			})
		);
	}

	#getValues() {
		return {
			id: this.#id,
			title: this.#title,
			description: this.#description,
			code: this.#code,
			price: this.#price,
			status: this.#status,
			stock: this.#stock,
			category: this.#category,
			thumbnails: this.#thumbnails
		};
	}
}

module.exports = Product;
