const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');



const port = 8000;

// access our external routes
app.use('/', require('./routes/routes'));
app.use(express.static(path.join(__dirname, 'public')));


//allow access to images
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});