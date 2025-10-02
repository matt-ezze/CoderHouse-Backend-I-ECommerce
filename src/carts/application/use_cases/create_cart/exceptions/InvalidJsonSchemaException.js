class InvalidJsonSchemaException extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidJsonSchemaException;
