const post = require('./routes/Post');

/**
 * @param {Express} app
 */
const configureProductsApi = function (app) {
	app.use('/api', post);
}

module.exports = {
	configureProductsApi
};
