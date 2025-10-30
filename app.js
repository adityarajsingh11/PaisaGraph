
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const connectToDB = require('./config/db');




const userRouter = require('./routes/user.routes');
const transactionRoutes = require('./routes/transaction.routes');
const indexRouter = require('./routes/index.routes'); 
const cookieParser = require('cookie-parser');

connectToDB();

const app = express();
const PORT = process.env.PORT || 5000; 

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/user', userRouter);         
app.use('/api/transactions', transactionRoutes); 
app.use('/api', indexRouter);                


app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});