const mongoose = require('mongoose');
 
const jokesSchema = new mongoose.Schema({
    thejoke: String,
    is_good: Boolean,
});
 
const Jokes = mongoose.model('joke', jokesSchema);
module.exports = Jokes;
