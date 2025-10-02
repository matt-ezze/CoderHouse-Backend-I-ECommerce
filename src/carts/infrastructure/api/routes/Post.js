const CreateCartUseCaseFactory = require('../../factories/CreateCartUseCaseFactory');
const CreateCartRequest = require('../../../application/use_cases/create_cart/CreateCartRequest');
const InvalidJsonSchemaException = require('../../../application/use_cases/create_cart/exceptions/InvalidJsonSchemaException');
const express = require('express');

const router = express.Router();

router.post('/carts', async (req, res) => {
	try {
		const createCartUseCase = CreateCartUseCaseFactory.getInstance();
		const response = await createCartUseCase.execute(CreateCartRequest.fromJson(req.body));
		res.status(201).json({
			message: 'Product created successfully',
			cartId: response.getCartId().getValue()
		});
	} catch (error) {
		if (error instanceof InvalidJsonSchemaException) {
			res.status(400).json({
				error: 'Request schema is invalid',
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
