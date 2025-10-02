const dotenv = require('dotenv');

dotenv.config();

const PRODUCT_DB_PATH = process.env.PRODUCT_DB_PATH || './products.json';
const CART_DB_PATH = process.env.CART_DB_PATH || './carts.json';
const PORT = process.env.PORT || 8080;

module.exports = {
	PRODUCT_DB_PATH,
	CART_DB_PATH,
	PORT
};
