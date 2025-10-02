const ProductCategory = require('../../../domain/value_objects/ProductCategory');
const ProductCode = require('../../../domain/value_objects/ProductCode');
const ProductDescription = require('../../../domain/value_objects/ProductDescription');
const ProductPrice = require('../../../domain/value_objects/ProductPrice');
const ProductStatus = require('../../../domain/value_objects/ProductStatus');
const ProductStock = require('../../../domain/value_objects/ProductStock');
const ProductTitle = require('../../../domain/value_objects/ProductTitle');
const ProductThumbnail = require('../../../domain/value_objects/ProductThumbnail');

class CreateProductRequest {
	#title;
	#description;
	#code;
	#price;
	#status;
	#stock;
	#category;
	#thumbnails;

	/**
	 * @param {Object} json 
	 * @returns {CreateProductRequest}
	 */
	static fromJson(json) {
		return new CreateProductRequest({
			title: new ProductTitle(json.title),
			description: new ProductDescription(json.description),
			code: new ProductCode(json.code),
			price: new ProductPrice(json.price),
			status: new ProductStatus(json.status),
			stock: new ProductStock(json.stock),
			category: new ProductCategory(json.category),
			thumbnails: json.thumbnails?.map(thumbnail => new ProductThumbnail(thumbnail))
		});
	}

	/**
	 * @param {Object} data
	 * @param {ProductTitle} data.title
	 * @param {ProductDescription} data.description
	 * @param {ProductCode} data.code
	 * @param {ProductPrice} data.price
	 * @param {ProductStatus} data.status
	 * @param {ProductStock} data.stock
	 * @param {ProductCategory} data.category
	 * @param {ProductThumbnail[]} [data.thumbnails]
	 */
	constructor(data) {
		this.#title = data.title;
		this.#description = data.description;
		this.#code = data.code;
		this.#price = data.price;
		this.#status = data.status;
		this.#stock = data.stock;
		this.#category = data.category;
		this.#thumbnails = data.thumbnails ?? [];
	}

	/**
	 * @returns {ProductTitle}
	 */
	getTitle() {
		return this.#title;
	}

	/**
	 * @returns {ProductDescription}
	 */
	getDescription() {
		return this.#description;
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
	 * @returns {ProductStatus}
	 */
	getStatus() {
		return this.#status;
	}

	/**
	 * @returns {ProductStock}
	 */
	getStock() {
		return this.#stock;
	}

	/**
	 * @returns {ProductCategory}
	 */
	getCategory() {
		return this.#category;
	}

	/**
	 * @returns {ProductThumbnail[]}
	 */
	getThumbnails() {
		return this.#thumbnails;
	}
}

module.exports = CreateProductRequest;
