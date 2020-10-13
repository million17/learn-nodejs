'use strict';
module.exports = (app) => {
    let productController = require('./controller/ProductsController');

    app.route('/products')
        .get(productController.get)
        .post(productController.insert);

    app.route('/products/:productId')
        .get(productController.detail)
        .put(productController.update)
        .delete(productController.delete)
}
