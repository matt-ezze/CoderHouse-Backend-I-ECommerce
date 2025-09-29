const InvalidProductStockException = require('../../../../../src/products/domain/exceptions/InvalidProductStockException');
const ProductStock = require('../../../../../src/products/domain/value_objects/ProductStock');
const chai = require('chai');
const mocha = require('mocha');

mocha.describe('ProductStock value object', () => {
	mocha.it('When creating a ProductStock instance with a negative value, it should throw an InvalidProductStock exception', () => {
		// Arrange
		const invalidStock = -1;

		// Act & Assert
		chai.expect(() => new ProductStock(invalidStock)).to.throw(
			InvalidProductStockException,
			InvalidProductStockException.getProductStockCannotBeNegative().message
		);
	});
});
