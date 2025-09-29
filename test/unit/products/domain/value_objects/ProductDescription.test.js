const InvalidProductDescriptionException = require('../../../../../src/products/domain/exceptions/InvalidProductDescriptionException');
const ProductDescription = require('../../../../../src/products/domain/value_objects/ProductDescription');
const chai = require('chai');
const mocha = require('mocha');

mocha.describe('ProductDescription value object', () => {
	mocha.it('When creating a ProductDescription instance with a length exceeding the maximum, it should throw an InvalidProductDescription exception', () => {
		// Arrange
		const invalidDescription = 'a'.repeat(ProductDescription.MAX_LENGTH + 1);

		// Act & Assert
		chai.expect(() => new ProductDescription(invalidDescription)).to.throw(InvalidProductDescriptionException);
	});
});
