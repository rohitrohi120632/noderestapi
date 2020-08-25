const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const port = process.env.PORT || 3000

require('dotenv/config');


//middlewares
app.use(bodyParser.json());
app.use(cors());

//import routes

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);






//Routes

app.get('/', (req, res) => {
    res.send('we are home');
});





//connect to db

mongoose.connect(
   process.env.DB_CONNECTION , 
{useNewUrlParser: true,
    useUnifiedTopology: true },

() => console.log('connected db')

);



//How to we start listening to the server

app.listen(port, () => {
    console.log ('server is up on port' + port)
});
