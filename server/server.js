//Import all dependencies,frameworks,models,routes
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const CORS=require('cors')
const PORT = process.env.PORT || 8000;
const hostname="localhost"
const userRoute=require('./Routes/userInfoRoute')
const paymentRoute=require('./Routes/paymentInfoRoute')
require('dotenv').config()
mongoose.set('strictQuery', true);
//Setup database entities
const connectDB = require('./config/db')

connectDB();
//Middleware
app.use(CORS())
app.use(express.json())

// used for parsing     
app.use(express.urlencoded({ extended: false }))
//Implement routing
app.use('/api/users', require('./Routes/userInfoRoute'))
app.use('/api', require('./Routes/paymentInfoRoute'))


 
//Start the server
app.listen(PORT,hostname,()=>{
    console.log(`Server is running on https://${hostname}:${PORT}`)
})