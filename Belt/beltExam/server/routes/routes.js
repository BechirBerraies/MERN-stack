const Controller=require('../controllers/controller');


module.exports= app=>  {
    app.post('/api/',Controller.create)
    app.get('/api/',Controller.findAll)
    app.get('/api//:id',Controller.finOne)
    app.put('/api//:id', Controller.update)
    app.delete('/api//:id',Controller.delete)
}