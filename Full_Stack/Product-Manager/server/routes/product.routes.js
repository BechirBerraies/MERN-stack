const ProductController=require('../controllers/product.controllers');


module.exports= app=>  {
    app.post('/api/product',ProductController.createProduct)
    app.get('/api/product',ProductController.findAllProducts)
    app.get('/api/product/:id',ProductController.finOneProduct)
    app.put('/api/product/:id', ProductController.updateProduct);
}