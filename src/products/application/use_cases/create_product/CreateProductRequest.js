const ProductCategory = require('../../../domain/value_objects/ProductCategory');
const ProductDescription = require('../../../domain/value_objects/ProductDescription');
const ProductTitle = require('../../../domain/value_objects/ProductTitle');
const InvalidRequestSchemaException = require('./exceptions/InvalidRequestSchemaException');
const zod = require('zod');

const CreateProductRequestSchema = zod.object({
	title: zod.string().min(1).max(ProductTitle.MAX_LENGTH),
	description: zod.string().max(ProductDescription.MAX_LENGTH),
	code: zod.string(),
	price: zod.number().min(0),
	status: zod.boolean(),
	stock: zod.number().int().min(0),
	category: zod.string().max(ProductCategory.MAX_LENGTH),
	thumbnails: zod.array(zod.url())
});

class CreateProductRequest {
	#data;

	/**
	 * @param {Object} data
	 */
	constructor(data) {
		const parseResult = CreateProductRequestSchema.safeParse(data);
		if (!parseResult.success) {
			throw new InvalidRequestSchemaException(parseResult.error.issues);
		}
		this.#data = parseResult.data;
	}

	/**
	 * @return {Object}
	 */
	getData() {
		return this.#data;
	}
}

module.exports = CreateProductRequest;
