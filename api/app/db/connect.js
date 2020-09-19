const mongoose = require('mongoose');

const URI = 'mongodb+srv://root:root@cluster0.lx09x.gcp.mongodb.net/test?retryWrites=true&w=majority'

const connectDb = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }) 
    console.log('db connected')
}

module.exports = connectDb;