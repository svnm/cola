
'use strict';

module.exports = function(app) {

	/* home route */
	var HomeRoute = require('./home');
	app.get('/', HomeRoute);

	var ExtractRoute = require('./extract');
	app.get('/products/:productId/extract/:extractId', ExtractRoute.view);

	/* Browse Categories */	
	var BrowseRoute = require('./browse');
	app.get('/browse/:category', BrowseRoute.view);


	/* 404 */
	var NotFoundRoute = require('./not-found');
	app.get('*', NotFoundRoute);

};
