console.log("Hello Noder!");

const express = require('express');
const path = require('path');
const uuid = require("uuid");


const app = express();
const PORT = process.env.PORT || 5500;
app.use(express.static('./public'));
app.use(express.static('./db/db.json'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

require('./routes/htmlRoutes/htmlRoutes')(app);

require('./routes/apiRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on: ${PORT}`);
});