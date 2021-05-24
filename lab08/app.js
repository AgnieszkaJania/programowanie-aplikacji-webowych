const express = require('express');

const app = express();
app.use(express.json()); 

//app.get('/', (req, res) => res.send('Hello World!'));

require('./routes/product.routes')(app);
require('./routes/cloth.routes')(app);


app.listen(8080, () => console.log('Example app listening on port 8080!'));