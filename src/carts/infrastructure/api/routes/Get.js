const CartNotFoundException = require('../../../application/use_cases/exceptions/CartNotFoundException');
const FindCartByIdRequest = require('../../../application/use_cases/find_cart_by_id/FindCartByIdRequest');
const CartId = require('../../../domain/value_objects/CartId');
const FindCartByIdUseCaseFactory = require('../../factories/FindCartByIdUseCaseFactory');
const express = require('express');

const router = express.Router();

router.get('/carts/:cartId', async (req, res) => {
	try {
		const findCartByIdUseCase = FindCartByIdUseCaseFactory.getInstance();
		const response = await findCartByIdUseCase.execute(
			new FindCartByIdRequest(new CartId(req.params.cartId))
		);
		res.status(200).json({
			cart: response.getCart().toJson()
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
