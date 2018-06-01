//import { normalize } from 'path';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.set('views', './views');


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/index', (req, res) => {
  res.render('index');
});

var portInfo = process.env.PORT || '8080';
var port = parseInt(portInfo, 10);


app.listen(port, () => {
  console.log('listening at port ' + port)
});

app.get('/', (req, res) => {
  const data = {
    person: {
      firstName: req.body.name
    }
  }

  res.render('index', data);
});