//Variables
var portname = process.argv[2];

//Dependencies
var colors = require('colors');
var serialPort = require('serialport');
var SerialPort = serialPort.SerialPort; //localized

var myPort = new SerialPort(portname, {
  baudrate: 9600,
  parser:serialPort.parsers.readline("\r\n")
});

serialPort.list(function (err, ports) {
  console.log(colors.red.underline("Connections"));
  ports.forEach(function(port) {
    console.log("Com Name: ".red + port.comName);
    console.log("Manufacturer: ".red + port.manufacturer);
    console.log("------------------");
  });
});

myPort.on('open', onOpen); 
myPort.on('data', onData);

function onOpen() {
  console.log('Serial port connections open.'.green);
};

function onData(data) {
  console.log('data received: ' + data);
}
