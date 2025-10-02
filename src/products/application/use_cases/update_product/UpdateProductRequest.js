const ProductCategory = require('../../../domain/value_objects/ProductCategory');
const ProductDescription = require('../../../domain/value_objects/ProductDescription');
const ProductId = require('../../../domain/value_objects/ProductId');
const ProductPrice = require('../../../domain/value_objects/ProductPrice');
const ProductStatus = require('../../../domain/value_objects/ProductStatus');
const ProductStock = require('../../../domain/value_objects/ProductStock');
const ProductTitle = require('../../../domain/value_objects/ProductTitle');
const ProductThumbnail = require('../../../domain/value_objects/ProductThumbnail');

class UpdateProductRequest {
	/**
	 * @param {Object} json 
	 */
	static fromJson(json) {
		return new UpdateProductRequest(
			new ProductId(json.id),
			{
				title: json.title ? new ProductTitle(json.title) : undefined,
				description: json.description ? new ProductDescription(json.description) : undefined,
				price: json.price ? new ProductPrice(json.price) : undefined,
				status: json.status ? new ProductStatus(json.status) : undefined,
				stock: json.stock ? new ProductStock(json.stock) : undefined,
				category: json.category ? new ProductCategory(json.category) : undefined,
				thumbnails: json.thumbnails ? json.thumbnails.map(t => new ProductThumbnail(t)) : undefined,
			}
		);
	}

	#id;
	#title;
	#description;
	#price;
	#status;
	#stock;
	#category;
	#thumbnails;

	/**
	 * @param {ProductId} id
	 * @param {Object} data
	 * @param {ProductTitle} [data.title]
	 * @param {ProductDescription} [data.description]
	 * @param {ProductPrice} [data.price]
	 * @param {ProductStatus} [data.status]
	 * @param {ProductStock} [data.stock]
	 * @param {ProductCategory} [data.category]
	 * @param {ProductThumbnail[]} [data.thumbnails]
	 */
	constructor(id, data) {
		this.#id = id;
		this.#title = data.title;
		this.#description = data.description;
		this.#price = data.price;
		this.#status = data.status;
		this.#stock = data.stock;
		this.#category = data.category;
		this.#thumbnails = data.thumbnails;
	}

	/**
	 * @returns {ProductId}
	 */
	getId() {
		return this.#id;
	}

	/**
	 * @returns {ProductTitle|undefined}
	 */
	getTitle() {
		return this.#title;
	}

	/**
	 * @returns {ProductDescription|undefined}
	 */
	getDescription() {
		return this.#description;
	}

	/**
	 * @returns {ProductPrice|undefined}
	 */
	getPrice() {
		return this.#price;
	}

	/**
	 * @returns {ProductStatus|undefined}
	 */
	getStatus() {
		return this.#status;
	}

	/**
	 * @returns {ProductStock|undefined}
	 */
	getStock() {
		return this.#stock;
	}

	/**
	 * @returns {ProductCategory|undefined}
	 */
	getCategory() {
		return this.#category;
	}

	/**
	 * @returns {ProductThumbnail[]|undefined}
	 */
	getThumbnails() {
		return this.#thumbnails;
	}
}

module.exports = UpdateProductRequest;
