class InvalidRequestSchemaException extends Error {
	/**
	 * @param {Object} schemaErrors 
	 */
	constructor(schemaErrors) {
		super(`Invalid request schema: ${JSON.stringify(schemaErrors)}`);
	}
}

module.exports = InvalidRequestSchemaException;
