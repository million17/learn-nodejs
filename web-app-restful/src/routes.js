'use strict';
module.exports = (app) => {
    let productController = require('./controller/ProductsController');

    app.route('/products')
        .get(productController.get);

    app.route('/products/:productId')
        .get(productController.detail)
}
