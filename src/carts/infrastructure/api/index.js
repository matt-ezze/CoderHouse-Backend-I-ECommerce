const post = require('./routes/Post');

/**
 * @param {Express} app
 */
const configureCartsApi = function (app) {
	app.use('/api', post);
}

module.exports = {
	configureCartsApi
};
