const MarchandiseController = require('../controllers/marchandise.controller')


module.exports= app =>{
    app.get('/api/Marchandises',MarchandiseController.findAll)
    app.get('/api/Marchandises/:id',MarchandiseController.findOne)
    app.post('/api/Marchandises',MarchandiseController.create)
    app.put('/api/Marchandises/:id',MarchandiseController.update)
    app.delete('/api/Marchandises/:id',MarchandiseController.delete)

}


