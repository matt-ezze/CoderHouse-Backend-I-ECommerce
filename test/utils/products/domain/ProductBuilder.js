const Product = require("../../../../src/products/domain/Product");
const ProductCategory = require("../../../../src/products/domain/value_objects/ProductCategory");
const ProductCode = require("../../../../src/products/domain/value_objects/ProductCode");
const ProductDescription = require("../../../../src/products/domain/value_objects/ProductDescription");
const ProductId = require("../../../../src/products/domain/value_objects/ProductId");
const ProductPrice = require("../../../../src/products/domain/value_objects/ProductPrice");
const ProductStatus = require("../../../../src/products/domain/value_objects/ProductStatus");
const ProductStock = require("../../../../src/products/domain/value_objects/ProductStock");
const ProductThumbnail = require("../../../../src/products/domain/value_objects/ProductThumbnail");
const ProductTitle = require("../../../../src/products/domain/value_objects/ProductTitle");

class ProductBuilder {
	static createDefaultProductWithOverrides(overrides = {}) {
		return new Product({
			id: overrides.id || ProductId.generate(),
			title: overrides.title || new ProductTitle('Default Title'),
			description: overrides.description || new ProductDescription('Default Description'),
			code: overrides.code || new ProductCode('DEFAULTCODE123'),
			price: overrides.price || new ProductPrice(100),
			status: overrides.status || new ProductStatus(true),
			stock: overrides.stock || new ProductStock(50),
			category: overrides.category || new ProductCategory('Default Category'),
			thumbnails: overrides.thumbnails || [new ProductThumbnail('http://example.com/default.jpg')]
		});
	}
}

module.exports = { ProductBuilder };
