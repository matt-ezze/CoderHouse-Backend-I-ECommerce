const InvalidProductPropertyException = require("./InvalidProductPropertyException");

class InvalidProductThumbnail extends InvalidProductPropertyException {
	static getProductThumbnailIsAnInvalidUrl() {
		return new InvalidProductThumbnail("Product thumbnail is an invalid URL");
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductThumbnail;
