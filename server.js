const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* Middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  // Fixed typo here

app.use(express.static('public'));

const port = 3001;
const accountsRoute = require ('./routes/accounts');
app.use('/accounts', accountsRoute)


app.listen(port, () => {
    console.log("Listening on port:", port);
});


