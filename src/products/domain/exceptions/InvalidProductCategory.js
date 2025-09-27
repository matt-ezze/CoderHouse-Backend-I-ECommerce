class InvalidProductCategory extends Error {
	static getCategoryExceedsMaxLength(maxLength) {
		return new InvalidProductCategory(`Category exceeds maximum length of ${maxLength} characters.`);
	}

	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

module.exports = InvalidProductCategory;
