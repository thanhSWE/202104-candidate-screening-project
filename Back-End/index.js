const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const App = express();
App.use(express.json());
App.use(cors());
var bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const TodoListRoute = require('./routes/routes');
mongoose.connect("mongodb://127.0.0.1:27017/Todo_Database", { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
	if(err) throw err;
	else console.log('Database connected');
})
App.use(bodyParser.json({limit:"50mb"}));
App.use(cors());
App.use(morgan("common"));
App.use('/',TodoListRoute);



App.listen(8000,()=>{
	console.log('Server connection listened on port 8000')
});



