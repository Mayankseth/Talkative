const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require('./config/db');
const colors= require('colors')
const userRoutes = require('./routes/userRoutes');
const chatRoute = require("./routes/chatRoute")
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();
const app= express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API is running good success");
});

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoute)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server listening on port ${PORT}`.yellow.bold));
