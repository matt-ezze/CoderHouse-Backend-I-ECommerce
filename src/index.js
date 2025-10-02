const { configureProductsApi } = require('./products/infrastructure/api');
const { configureCartsApi } = require('./carts/infrastructure/api');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
configureProductsApi(app);
configureCartsApi(app);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
