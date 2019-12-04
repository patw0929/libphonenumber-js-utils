var path = require('path');
var compressor = require('node-minify');

(function () {
  compressor.minify({
    compressor: 'uglifyjs',
    input: './libphonenumber/javascript/i18n/phonenumbers/demo-compiled.js',
    output: path.resolve(__dirname, '../dist/libphonenumber.js'),
  });
})();
