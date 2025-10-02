const ProductNotFoundException = require('../../../application/use_cases/exceptions/ProductNotFoundException');
const FindProductByIdRequest = require('../../../application/use_cases/find_product_by_id/FindProductByIdRequest');
const ProductId = require('../../../domain/value_objects/ProductId');
const FindAllProductsUseCaseFactory = require('../../factories/FindAllProductsUseCaseFactory');
const FindProductByIdUseCaseFactory = require('../../factories/FindProductByIdUseCaseFactory');
const express = require('express');

const router = express.Router();

router.get('/products', async (req, res) => {
	try {
		const findAllProductsUseCase = FindAllProductsUseCaseFactory.getInstance();
		const response = await findAllProductsUseCase.execute();
		res.status(200).json({ products: response.getProducts().map(product => product.toJson()) });
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
		console.error(error);
	}
});

router.get('/products/:id', async (req, res) => {
	try {
		const findProductByIdUseCase = FindProductByIdUseCaseFactory.getInstance();
		const response = await findProductByIdUseCase.execute(
			new FindProductByIdRequest(new ProductId(req.params.id))
		);
		res.status(200).json({ product: response.getProduct().toJson() });
	} catch (error) {
		if (error instanceof ProductNotFoundException) {
			res.status(404).json({
				error: 'Product Not Found',
				description: error.message
			});
		} else {
			res.status(500).json({ error: 'Internal Server Error' });
		}
		console.error(error);
	}
});

module.exports = router;
