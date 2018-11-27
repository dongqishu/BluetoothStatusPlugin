var exec = require('cordova/exec');

exports.start = function(success, fail) {
  return cordova.exec(success, fail, 'BluetoothStatusPlugin', 'start', [{}]);
};
exports.stop = function(success, fail) {
  return cordova.exec(success, fail, 'BluetoothStatusPlugin', 'stop', [{}]);
};