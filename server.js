var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server started on 3000');
});
