var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! ver.2\n');
  res.send(`${secret}`);
  res.send(`${configmap}`);
});

app.get('/mars', function(req, res) { res.send('Hello Mars!\n'); });

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

