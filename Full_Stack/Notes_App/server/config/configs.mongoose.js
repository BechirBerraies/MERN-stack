const mongoose = require('mongoose')

module.exports = (databaseName) => {
    mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`
).then(() => console.log('👌👌👌👌ESTABLISHED CONNECTION GITIGNORE👌👌👌👌'))
.catch(err => console.log('Something went wrong when connecting to the database ', err))};