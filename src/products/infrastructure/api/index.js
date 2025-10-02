const get = require('./routes/Get');
const post = require('./routes/Post');
const put = require('./routes/Put');

/**
 * @param {Express} app
 */
const configureProductsApi = function (app) {
	app.use('/api', get);
	app.use('/api', post);
	app.use('/api', put);
}

module.exports = {
	configureProductsApi
};
