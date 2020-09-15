//import the express framework
const express = require('express');
//create express
const app = express();
//set the port
const port =3000;
//create GET endpoint
app.get('/test/..', (req, res) => {
    res.send('Hello World, from express');

});

//routes will go here
app.get('/api/users',function(req,res){
    var user_id=req.param('id');
    var token =req.param('token');
    var geo = req.param( 'geo');

    res.send(user_id+' '+token+' '+geo+' ');

});

// parameters sent with 
app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
});
//start the client
app.listen(port,()=> console.log('Hello world app listening on port ${port}!'));