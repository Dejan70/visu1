const port = 80;  //digital ocean
//const port = 1880;  //OliMih


let app    = require('express')();
let server = app.listen(port);
let io     = require('socket.io')(server);
/*
var app = require('express')();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(app);
*/

///  soc
//soc 2
app.get('/', function(req, res){
    //send the index.html file for all requests
   // res.sendFile(__dirname + '/index.html');
   '/index.html'
   res.sendFile(__dirname + "/public");

  });
   // http.listen(3001, function(){
   //   http.listen(1880, function(){
    //console.log('listening on *:3001');
 // });
  setInterval( function() {
   
   // var msg = Math.random();
   const snd1=[
      {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,},
      {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,},
      {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,},
      {name0:"0",result:"0",name:"0",ip:"0", num:"0",lay:"nn", x:1,y:5,}
    
    ]
  
   var msg = "‚23";
  snd1[1].name0="deki";
   // io.emit('message', msg);
   io.emit('message', snd1);
    // io.emit( msg);
    //console.log (msg);
  }, 1000);
//soc 2 end

  const express = require('express');
//iz  const app = express();
app.use(express.json());
app.use(express.static(__dirname +"/public"));
//app.use(express.static(__dirname +'/index.html'));

app.post('/save',(req,res) => {
    let msg = req.body.msg;
    res.send("Sve ok1");
            })

app.post('/sav',(req,res) => {
    let msg = req.body.msg;
    res.send("Sve ok2");
             })
             console.log('listening to port 80');

