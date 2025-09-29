const InvalidProductTitleException = require('../../../../../src/products/domain/exceptions/InvalidProductTitleException');
const ProductTitle = require('../../../../../src/products/domain/value_objects/ProductTitle');
const chai = require('chai');
const mocha = require('mocha');

mocha.describe('ProductTitle value object', () => {
	mocha.it('When creating a ProductTitle instance with an empty value, it should throw an InvalidProductTitle exception stating that the title cannot be empty', () => {
		// Arrange
		const invalidTitle = '';

		// Act & Assert
		chai.expect(() => new ProductTitle(invalidTitle)).to.throw(
			InvalidProductTitleException,
			InvalidProductTitleException.getTitleCannotBeEmpty().message
		);
	});

	mocha.it('When creating a ProductTitle instance with a length exceeding the maximum, it should throw an InvalidProductTitle exception', () => {
		// Arrange
		const invalidTitle = 'a'.repeat(ProductTitle.MAX_LENGTH + 1);

		// Act & Assert
		chai.expect(() => new ProductTitle(invalidTitle)).to.throw(
			InvalidProductTitleException,
			InvalidProductTitleException.getTitleExceedsMaxLength(ProductTitle.MAX_LENGTH).message
		);
	});
});
