const ProductNotFoundException = require('../../../../products/application/use_cases/exceptions/ProductNotFoundException');
const FindProductByIdRequest = require('../../../../products/application/use_cases/find_product_by_id/FindProductByIdRequest');
const ProductId = require('../../../../products/domain/value_objects/ProductId');
const FindProductByIdUseCaseFactory = require('../../../../products/infrastructure/factories/FindProductByIdUseCaseFactory');
const CartNotFoundException = require('../../../application/use_cases/exceptions/CartNotFoundException');
const AddProductToCartUseCaseFactory = require('../../factories/AddProductToCartUseCaseFactory');
const CreateCartUseCaseFactory = require('../../factories/CreateCartUseCaseFactory');
const AddProductToCartRequest = require('../../../application/use_cases/add_product_to_cart/AddProductToCartRequest');
const CreateCartRequest = require('../../../application/use_cases/create_cart/CreateCartRequest');
const InvalidJsonSchemaException = require('../../../application/use_cases/create_cart/exceptions/InvalidJsonSchemaException');
const InvalidCartPropertyException = require('../../../domain/exceptions/InvalidCartPropertyException');
const express = require('express');

const router = express.Router();

const checkProductExists = async (productId) => {
	const findProductByIdUseCase = FindProductByIdUseCaseFactory.getInstance();
	await findProductByIdUseCase.execute(new FindProductByIdRequest(productId));
};

router.post('/carts', async (req, res) => {
	try {
		const createCartUseCase = CreateCartUseCaseFactory.getInstance();
		const request = CreateCartRequest.fromJson(req.body);
		await Promise.all(request.getProducts().values().map(product => checkProductExists(new ProductId(product.getId()))));
		const response = await createCartUseCase.execute(CreateCartRequest.fromJson(req.body));
		res.status(201).json({
			message: 'Cart created successfully',
			cartId: response.getCartId().getValue()
		});
	} catch (error) {
		if (error instanceof InvalidJsonSchemaException) {
			res.status(400).json({
				error: 'Request schema is invalid',
				description: error.message
			});
		} else if (error instanceof ProductNotFoundException) {
			res.status(404).json({
				error: 'Product not found',
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

router.post('/carts/:cartId/product/:productId', async (req, res) => {
	try {
		await checkProductExists(new ProductId(req.params.productId));
		const addProductToCartUseCase = AddProductToCartUseCaseFactory.getInstance();
		await addProductToCartUseCase.execute(AddProductToCartRequest.fromJson({
			cartId: req.params.cartId,
			product: {
				id: req.params.productId,
				quantity: req.body.quantity
			}
		}));
		res.status(201).json({
			message: 'Product added to the cart successfully'
		});
	} catch (error) {
		if (error instanceof InvalidCartPropertyException) {
			res.status(400).json({
				error: 'Request schema is invalid',
				description: error.message
			});
		} else if (error instanceof CartNotFoundException) {
			res.status(404).json({
				error: 'Cart not found',
				description: error.message
			});
		} else if (error instanceof ProductNotFoundException) {
			res.status(404).json({
				error: 'Product not found',
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
