const mongoose = require('mongoose');
const { Schema } = mongoose;

const todo = new Schema ({
    todo: String,
    done: Boolean
})

const db = mongoose.model('todo', todo)

module.exports = db