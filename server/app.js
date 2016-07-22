require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');

//usermodel

//sequelize.sync({force:true});
sequelize.sync();


app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate_session'));

app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));
app.use('/api/definition', require('./routes/definition'));
app.use('/api/log', require('./routes/log'));

app.use('/api/test', function(req,res){
	res.send("I'm back losers");
});

app.listen(3000, function(){
	console.log("app is listening on port 3000");
});