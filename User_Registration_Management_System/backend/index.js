const express = require('express');
const { connectMongoDB } = require('./connection');
const cors = require('cors');
const userSchema = require('./models/user');
const { router } = require('./routes/user');


const app = express();

//connection

connectMongoDB('mongodb://127.0.0.1:27017/UserRegistrationDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("db connected");
}).catch(error => {
    console.error("Error connecting to the database:", error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes

app.use('/', router);
app.use('/', router);

app.listen(9002, () => {
    console.log("server running on port 9002");
});
