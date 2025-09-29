const InvalidProductCategory = require('../../../../../src/products/domain/exceptions/InvalidProductCategory');
const ProductCategory = require('../../../../../src/products/domain/value_objects/ProductCategory');
const chai = require('chai');
const mocha = require('mocha');

mocha.describe('ProductCategory value object', () => {
	mocha.it('When creating a ProductCategory instance with a length exceeding the maximum, it should throw an InvalidProductCategory exception', () => {
		// Arrange
		const invalidCategory = 'a'.repeat(ProductCategory.MAX_LENGTH + 1);

		// Act & Assert
		chai.expect(() => new ProductCategory(invalidCategory)).to.throw(
			InvalidProductCategory,
			InvalidProductCategory.getCategoryExceedsMaxLength(ProductCategory.MAX_LENGTH).message
		);
	});
});
