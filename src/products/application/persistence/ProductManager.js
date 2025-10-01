const Product = require('../../domain/Product');
const ProductId = require('../../domain/value_objects/ProductId');

class ProductManager {
	/**
	 * @param {Product} product 
	 * @returns {Promise<void>}
	 */
	async save(product) {
		throw new Error('ProductManager.save() not implemented');
	}

	/**
	 * @param {ProductId} productId 
	 * @returns {Promise<void>}
	 */
	async delete(productId) {
		throw new Error('ProductManager.delete() not implemented');
	}

	/**
	 * @param {ProductId} productId
	 * @returns {Promise<Product|null>}
	 */
	async findById(productId) {
		throw new Error('ProductManager.findById() not implemented');
	}

	/**
	 * @returns {Promise<Product[]>}
	 */
	async findAll() {
		throw new Error('ProductManager.findAll() not implemented');
	}
}

module.exports = ProductManager;
