const { configureProductsApi } = require('./products/infrastructure/api');
const { configureCartsApi } = require('./carts/infrastructure/api');
const { PORT } = require('./config');
const express = require('express');

const app = express();

app.use(express.json());
configureProductsApi(app);
configureCartsApi(app);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
