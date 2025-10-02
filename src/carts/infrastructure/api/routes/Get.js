const FindProductByIdRequest = require('../../../../products/application/use_cases/find_product_by_id/FindProductByIdRequest');
const ProductId = require('../../../../products/domain/value_objects/ProductId');
const FindProductByIdUseCaseFactory = require('../../../../products/infrastructure/factories/FindProductByIdUseCaseFactory');
const CartNotFoundException = require('../../../application/use_cases/exceptions/CartNotFoundException');
const FindCartByIdRequest = require('../../../application/use_cases/find_cart_by_id/FindCartByIdRequest');
const CartId = require('../../../domain/value_objects/CartId');
const FindCartByIdUseCaseFactory = require('../../factories/FindCartByIdUseCaseFactory');
const express = require('express');

const router = express.Router();

router.get('/carts/:cartId', async (req, res) => {
	try {
		const findCartByIdUseCase = FindCartByIdUseCaseFactory.getInstance();
		const findProductByIdUseCase = FindProductByIdUseCaseFactory.getInstance();
		const findCartByIdResponse = await findCartByIdUseCase.execute(
			new FindCartByIdRequest(new CartId(req.params.cartId))
		);
		const cart = findCartByIdResponse.getCart();
		// Fixme: we create a promise for each product instead of perform one
		// call to fetch all products in one go.
		const findAllProductsForCartResponse = await Promise.all(cart
			.getProducts()
			.values()
			.map(product => findProductByIdUseCase.execute(new FindProductByIdRequest(new ProductId(product.getId()))))
		);
		const products = Object.fromEntries(findAllProductsForCartResponse.map(response => [
			response.getProduct().getId().getValue(),
			{
				quantity: cart.getProducts().get(response.getProduct().getId().getValue()).getQuantity(),
				detail: response.getProduct().toJson()
			}
		]));
		res.status(200).json({
			cart: {
				id: cart.getId().getValue(),
				products
			}
		});
	} catch (error) {
		if (error instanceof CartNotFoundException) {
			res.status(404).json({
				error: 'Cart not found',
				description: error.message
			});
		} else {
			res.status(500).json({
				error: 'Internal server error'
			});
		}
		console.error(error);
	}
});

module.exports = router;
