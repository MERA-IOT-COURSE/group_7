const express = require('express');
const app=express();
const port=8000;
const host='0.0.0.0';
const Gpio = require('onoff').Gpio;

var pin=new Gpio(17,'out');
app.use(express.static(__dirname+'/views'));

app.get('/',function(req,res){
	res.sendFile('index.html');
});

app.post('/led/on', function(req,res){
	pin.write(Gpio.HIGH,function(err){
	if(err) throw err;
		console.log('True written to pin');
	});
});

app.post('/led/off', function(req,res){
	pin.write(Gpio.LOW, function(err){
	if(err) throw err;
		console.log('False written to pin');
	});
});

app.listen(port,host,()=>{
	console.log('App listen on port '+port);
});
