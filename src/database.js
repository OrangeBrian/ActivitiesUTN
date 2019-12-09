const mongoose = require ('mongoose');

mongoose.connect(process.env.DEV_DB, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true,
}).catch (error => console.log(error)) 

const connection = mongoose.connection;

connection.once('open', () => console.log("Database connected"));
mongoose.Promise = global.Promise;