const express = require ('express');

const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
require('./src/database');
const cors = require('cors');

app.use(cors());

app.use (express.static('client'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.use('/api', require('./routes/api'));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));