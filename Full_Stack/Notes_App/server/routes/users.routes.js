const userController = require('../controllers/user.controller')

module.exports = app =>{

    app.post ('/api/register', userController.register)
    app.post ('/api/login', userController.login)
    app.post('/api/lougout', userController.logout)
    app.get('/api/loggedUser', userController.getLoggedUser)


}