const InvalidProductPriceException = require('../../../../../src/products/domain/exceptions/InvalidProductPriceException');
const ProductPrice = require('../../../../../src/products/domain/value_objects/ProductPrice');
const chai = require('chai');
const mocha = require('mocha');

mocha.describe('ProductPrice value object', () => {
	mocha.it('When creating a ProductPrice instance with a negative value, it should throw an InvalidProductPrice exception', () => {
		// Arrange
		const invalidPrice = -1;

		// Act & Assert
		chai.expect(() => new ProductPrice(invalidPrice)).to.throw(
			InvalidProductPriceException,
			InvalidProductPriceException.getPriceCannotBeNegative().message
		);
	});
});
