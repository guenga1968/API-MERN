const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const {mongoose} =  require('./database.js');

const app = express();

//Settings
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/reg',require('./routes/cows.routes'));

//Static files
app.use(express.static(path.join(__dirname + 'public')));

app.listen(app.get('port'), () => {
    console.log('Server is running on port ', app.get('port'));
    });