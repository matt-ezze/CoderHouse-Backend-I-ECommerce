const ProductCategory = require('../../../../src/products/domain/value_objects/ProductCategory');
const ProductDescription = require('../../../../src/products/domain/value_objects/ProductDescription');
const ProductPrice = require('../../../../src/products/domain/value_objects/ProductPrice');
const ProductStatus = require('../../../../src/products/domain/value_objects/ProductStatus');
const ProductStock = require('../../../../src/products/domain/value_objects/ProductStock');
const ProductThumbnail = require('../../../../src/products/domain/value_objects/ProductThumbnail');
const ProductTitle = require('../../../../src/products/domain/value_objects/ProductTitle');
const { ProductBuilder } = require('../../../utils/products/domain/ProductBuilder');
const chai = require('chai');
const mocha = require('mocha');

mocha.describe('Product domain entity', () => {
	mocha.it('When calling updateTitle method, then it should return a new product instance with the updated title', () => {
		// Arrange
		const oldTitle = new ProductTitle('Old Title');
		const newTitle = new ProductTitle('New Title');
		const previousProduct = ProductBuilder.createDefaultProductWithOverrides({
			title: oldTitle,
		});

		// Act
		const updatedProduct = previousProduct.updateTitle(newTitle);

		// Assert
		chai.expect(updatedProduct).is.not.equals(previousProduct);
		chai.expect(updatedProduct.getTitle().getValue()).is.equals(newTitle.getValue());
		chai.expect(previousProduct.getTitle().getValue()).is.equals(oldTitle.getValue());
	});

	mocha.it('When calling updateDescription method, then it should return a new product instance with the updated description', () => {
		// Arrange
		const oldDescription = new ProductDescription('Old Description');
		const newDescription = new ProductDescription('New Description');
		const previousProduct = ProductBuilder.createDefaultProductWithOverrides({
			description: oldDescription,
		});

		// Act
		const updatedProduct = previousProduct.updateDescription(newDescription);

		// Assert
		chai.expect(updatedProduct).is.not.equals(previousProduct);
		chai.expect(updatedProduct.getDescription().getValue()).is.equals(newDescription.getValue());
		chai.expect(previousProduct.getDescription().getValue()).is.equals(oldDescription.getValue());
	});

	mocha.it('When calling updatePrice method, then it should return a new product instance with the updated price', () => {
		// Arrange
		const oldPrice = new ProductPrice(100);
		const newPrice = new ProductPrice(200);
		const previousProduct = ProductBuilder.createDefaultProductWithOverrides({
			price: oldPrice,
		});

		// Act
		const updatedProduct = previousProduct.updatePrice(newPrice);

		// Assert
		chai.expect(updatedProduct).is.not.equals(previousProduct);
		chai.expect(updatedProduct.getPrice().getValue()).is.equals(newPrice.getValue());
		chai.expect(previousProduct.getPrice().getValue()).is.equals(oldPrice.getValue());
	});

	mocha.it('When calling updateStatus method, then it should return a new product instance with the updated status', () => {
		// Arrange
		const oldStatus = new ProductStatus(true);
		const newStatus = new ProductStatus(false);
		const previousProduct = ProductBuilder.createDefaultProductWithOverrides({
			status: oldStatus,
		});

		// Act
		const updatedProduct = previousProduct.updateStatus(newStatus);

		// Assert
		chai.expect(updatedProduct).is.not.equals(previousProduct);
		chai.expect(updatedProduct.getStatus().getValue()).is.equals(newStatus.getValue());
		chai.expect(previousProduct.getStatus().getValue()).is.equals(oldStatus.getValue());
	});

	mocha.it('When calling updateStock method, then it should return a new product instance with the updated stock', () => {
		// Arrange
		const oldStock = new ProductStock(10);
		const newStock = new ProductStock(20);
		const previousProduct = ProductBuilder.createDefaultProductWithOverrides({
			stock: oldStock,
		});

		// Act
		const updatedProduct = previousProduct.updateStock(newStock);

		// Assert
		chai.expect(updatedProduct).is.not.equals(previousProduct);
		chai.expect(updatedProduct.getStock().getValue()).is.equals(newStock.getValue());
		chai.expect(previousProduct.getStock().getValue()).is.equals(oldStock.getValue());
	});

	mocha.it('When calling updateCategory method, then it should return a new product instance with the updated category', () => {
		// Arrange
		const oldCategory = new ProductCategory('Old Category');
		const newCategory = new ProductCategory('New Category');
		const previousProduct = ProductBuilder.createDefaultProductWithOverrides({
			category: oldCategory,
		});

		// Act
		const updatedProduct = previousProduct.updateCategory(newCategory);

		// Assert
		chai.expect(updatedProduct).is.not.equals(previousProduct);
		chai.expect(updatedProduct.getCategory().getValue()).is.equals(newCategory.getValue());
		chai.expect(previousProduct.getCategory().getValue()).is.equals(oldCategory.getValue());
	});

	mocha.it('When calling updateThumbnails method, then it should return a new product instance with the updated thumbnails', () => {
		// Arrange
		const oldThumbnails = [
			new ProductThumbnail('http://old-thumbnail.com/image1.jpg', 'Old Image 1'),
			new ProductThumbnail('http://old-thumbnail.com/image2.jpg', 'Old Image 2'),
		];
		const newThumbnails = [
			new ProductThumbnail('http://new-thumbnail.com/image1.jpg', 'New Image 1'),
			new ProductThumbnail('http://new-thumbnail.com/image2.jpg', 'New Image 2'),
			new ProductThumbnail('http://new-thumbnail.com/image3.jpg', 'New Image 3'),
		];
		const previousProduct = ProductBuilder.createDefaultProductWithOverrides({
			thumbnails: oldThumbnails,
		});

		// Act
		const updatedProduct = previousProduct.updateThumbnails(newThumbnails);

		// Assert
		chai.expect(updatedProduct).is.not.equals(previousProduct);
		chai.expect(updatedProduct.getThumbnails()).is.deep.equal(newThumbnails);
		chai.expect(previousProduct.getThumbnails()).is.deep.equal(oldThumbnails);
	});
});
