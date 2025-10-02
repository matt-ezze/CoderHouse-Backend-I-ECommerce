const express = require('express');
const CreateProductRequest = require('../../../application/use_cases/create_product/CreateProductRequest');
const CreateProductUseCaseFactory = require('../../factories/CreateProductUseCaseFactory');
const InvalidProductPropertyException = require('../../../domain/exceptions/InvalidProductPropertyException');

const router = express.Router();

router.post('/products', async (req, res) => {
	try {
		const createUseCase = CreateProductUseCaseFactory.getInstance();
		const response = await createUseCase.execute(CreateProductRequest.fromJson(req.body));
		res.status(201).json({ message: `Product created successfully: ${response.getProductId().getValue()}` });
	} catch (error) {
		if (error instanceof InvalidProductPropertyException) {
			res.status(400).json({
				error: 'Request schema is invalid',
				description: error.message
			});
			console.error(error);
		} else {
			res.status(500).json({
				error: 'Internal server error'
			});
			console.error(error);
		}
	}
});

module.exports = router;
