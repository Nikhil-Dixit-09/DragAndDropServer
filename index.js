const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 8000;
const dotenv=require('dotenv');
dotenv.config();
const router = require('./routes/index.js');
const app = express();
const http = require('http').Server(app);


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/', router);

const db = require('./config/mongoose');
console.log('hi');
http.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });

