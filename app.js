const express = require('express');
require('dotenv').config();
require('./utils/dbmongo');
const cors = require('cors');

const usersApiRouter = require('./routes/userApi');
const productApiRouter = require('./routes/productApi.js');
const errors = require('./middlewares/errors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', (req, res) => {
    res.render('home')
});

//API routes
app.use('/api', usersApiRouter);
app.use('/api', productApiRouter);

//Capture All 404 errors
app.use(errors.error404);
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});