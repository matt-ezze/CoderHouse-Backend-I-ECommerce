const OnProductDeletedRequest = require('../../../../carts/application/events/on_product_deleted/OnProductDeletedRequest');
const OnProductDeletedHandlerFactory = require('../../../../carts/infrastructure/factories/OnProductDeletedHandlerFactory');
const DeleteProductUseCaseFactory = require('../../factories/DeleteProductUseCaseFactory');
const ProductId = require('../../../domain/value_objects/ProductId');
const express = require('express');
const DeleteProductRequest = require('../../../application/use_cases/delete_product/DeleteProductRequest');

const router = express.Router();

router.delete('/products/:id', async (req, res) => {
	try {
		const deleteProductUseCase = DeleteProductUseCaseFactory.getInstance();
		// Ugly: we should find a better way to trigger events agnostically
		const cartOnProductDeletedHandler = OnProductDeletedHandlerFactory.getInstance();
		const productId = new ProductId(req.params.id);
		await deleteProductUseCase.execute(new DeleteProductRequest(productId));
		await cartOnProductDeletedHandler.handle(new OnProductDeletedRequest(productId));
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
		console.error(error);
	}
});

module.exports = router;
