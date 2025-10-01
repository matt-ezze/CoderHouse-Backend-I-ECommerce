const ProductManager = require("../../application/persistence/ProductManager");
const Product = require("../../domain/Product");
const ProductId = require("../../domain/value_objects/ProductId");
const fs = require("fs");

class FileSystemProductManager extends ProductManager {
	#path;

	/**
	 * @param {string} path 
	 */
	constructor(path) {
		super();
		this.#path = path;
	}

	/**
	 * @override
	 * @param {Product} product 
	 * @returns {Promise<void>}
	 */
	async save(product) {
		const products = await this.#loadDbFile();
		products[product.getId().getValue()] = product.toJson();
		await this.#writeDbFile(products);
	}

	/**
	 * @override
	 * @param {ProductId} productId
	 * @returns {Promise<void>}
	 */
	async delete(productId) {
		const products = await this.#loadDbFile();
		delete products[productId.getValue()];
		await this.#writeDbFile(products);
	}

	/**
	 * @override
	 * @param {ProductId} productId
	 * @returns {Promise<Product|null>}
	 */
	async findById(productId) {
		const products = await this.#loadDbFile();
		const productData = products[productId.getValue()];
		if (!productData) {
			return null;
		}
		return Product.fromJson(productData);
	}

	/**
	 * @override
	 * @returns {Promise<Product[]>}
	 */
	async findAll() {
		const products = await this.#loadDbFile();
		return Object
			.values(products)
			.map(productData => Product.fromJson(productData));
	}

	async #loadDbFile() {
		const data = await fs.promises.readFile(this.#path);
		return JSON.parse(data);
	}

	async #writeDbFile(data) {
		await fs.promises.writeFile(this.#path, JSON.stringify(data));
	}
}

module.exports = FileSystemProductManager;
