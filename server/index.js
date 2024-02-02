const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

//cors
app.use(cors());

//BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// middleware to parse the json requist body
app.use(express.json());

// import routes from todo api
const ecomRoutes = require('./routes/ecomzonefy');
//mount the todo ASPI routes
app.use('/', ecomRoutes);

//start the server
app.listen(PORT, () => {
  console.log(`Server started succesfully at ${PORT}`);
});

// conect to the database
const dbConnection = require('./configs/database');
dbConnection();

// default route

app.get('/', (req, res) => {
  res.send(`<h1>ecomzonefy default page</h1>`);
});
