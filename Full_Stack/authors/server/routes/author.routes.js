const AuthorController=require('../controllers/controllers.author');


module.exports= app=>  {
    app.post('/api/author',AuthorController.createAuthor)
    app.get('/api/author',AuthorController.findAllAuthors)
    app.get('/api/author/:id',AuthorController.finOneAuthor)
    app.put('/api/author/:id', AuthorController.updateAuthor)
    app.delete('/api/author/:id',AuthorController.deleteAuthor)
}