const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rootdb:rootdb@cluster0.jactp.mongodb.net/AngularFirstApiDB?retryWrites=true&w=majority')
.then((result) => {
    console.log('connection established with database ');
}).catch((err) => {
    console.log(err);
    console.log('connection failed');
});

module.exports = mongoose.connection;   