const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema({
    Name: { type: String ,
    required:[true,"YOU MUST HAVE A NAME"],
    minlength:[3,"Name must be at least 3 characters 🙃🙃🙃🙃🙃🙃🙃"]}

}, { timestamps: true });

const Author = mongoose.model("Author",AuthorSchema);
module.exports= Author


