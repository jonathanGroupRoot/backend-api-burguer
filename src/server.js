const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());


app.use(routes);

require('./database/index');

app.listen(3000, () => {
    console.log('Servidor Funcionando');
});