//Serial port module
//Dependencies
var colors = require('colors');
var serialPort = require('serialport');
var SerialPort = serialPort.SerialPort; //localized

function serialPortConnection (portname, brate) {

  var myPort = new SerialPort(portname, {
    baudrate: brate,
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
  return myPort;
}

function onOpen() {
  console.log('Serial port connections open.'.green);
};
module.exports.serialPortConnection = serialPortConnection;
