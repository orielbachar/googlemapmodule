var express = require('express');
var app = express();


app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req,res){
  res.send('hello');
});


app.set('port', 8000);
app.listen(8000);
