const express = require('express');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('./public'));
app.use(express.static('./data'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes/htmlRoutes')(app);

require('./routes/apiRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on: ${PORT}`);
});