const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        const connect = await mongoose.connect('mongodb+srv://amisha:amisha@cluster0.c2hp3bd.mongodb.net/?retryWrites=true&w=majority');
        console.log(`MONGODB CONNECTED : ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        // process.exit(1);
    }
}



module.exports = connectDB;