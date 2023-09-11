const personController=require('../controllers/person.controller');
module.exports= app=>  {
    app.get('/api/people',personController.finAllPeople)
    app.get('/api/people/:id',personController.finOnePerson)
    app.post('/api/people',personController.createPerson)
    app.put('/api/people/:id',personController.updatePerson)
    app.delete('/api/people/:id',personController.deletePerson)
}