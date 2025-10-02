const ProductNotFoundException = require('../../../application/use_cases/exceptions/ProductNotFoundException');
const UpdateProductRequest = require('../../../application/use_cases/update_product/UpdateProductRequest');
const InvalidProductPropertyException = require('../../../domain/exceptions/InvalidProductPropertyException');
const UpdateProductUseCaseFactory = require('../../factories/UpdateProductUseCaseFactory');
const express = require('express');

const router = express.Router();

router.put('/products/:id', async (req, res) => {
	try {
		const updateProductUseCase = UpdateProductUseCaseFactory.getInstance();
		await updateProductUseCase.execute(UpdateProductRequest.fromJson({
			id: req.params.id,
			...req.body
		}));
		res.status(204).send();
	} catch (error) {
		if (error instanceof InvalidProductPropertyException) {
			res.status(400).json({
				error: 'Request schema is invalid',
				description: error.message
			});
			console.error(error);
		} else if (error instanceof ProductNotFoundException) {
			res.status(404).json({
				error: 'Product not found',
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
