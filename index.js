var pictureTube = require('picture-tube')
var tube = pictureTube();
tube.pipe(process.stdout);

var fs = require('fs');
fs.createReadStream('img/sonots-san.png').pipe(tube);

module.exports = function (cb) {
  tube.pipe(cb);
};
