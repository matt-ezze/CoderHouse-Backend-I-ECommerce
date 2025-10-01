const express = require('express');
const CreateProductRequest = require('../../../application/use_cases/create_product/CreateProductRequest');
const InvalidRequestSchemaException = require('../../../application/use_cases/create_product/exceptions/InvalidRequestSchemaException');
const CreateProductUseCaseFactory = require('../../factories/CreateProductUseCaseFactory');

const router = express.Router();

router.post('/products', async (req, res) => {
	try {
		const createUseCase = CreateProductUseCaseFactory.getInstance();
		await createUseCase.execute(new CreateProductRequest(req.body));
		res.status(201).json({ message: 'Product created successfully' });
	} catch (error) {
		if (error instanceof InvalidRequestSchemaException) {
			res.status(400).json({
				error: 'Request schema is invalid'
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
