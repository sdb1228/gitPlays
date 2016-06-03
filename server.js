var express = require('express');
var app = express();
var path = require('path');

if(process.env.NODE_ENV === 'development'){
  app.use(express.static('public'));
}

app.listen(3000, '0.0.0.0', function () {
  console.log('Server started on 3000');
});
