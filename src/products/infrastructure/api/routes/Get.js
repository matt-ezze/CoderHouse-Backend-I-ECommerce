const express = require('express');
const FindAllProductsUseCaseFactory = require('../../factories/FindAllProductsUseCaseFactory');
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

module.exports = router;
