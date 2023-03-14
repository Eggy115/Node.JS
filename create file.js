// include node fs module
var fs = require('fs');
var data ='text here';
 
// writeFile function with filename, content and callback function
fs.writeFile('newfile.txt', data, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
