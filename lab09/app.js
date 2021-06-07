const express = require('express');
const dbConfig = require("./config/db.config");

const app = express();
app.use(express.json()); 

//app.get('/', (req, res) => res.send('Hello World!'));

require('./routes/product.routes')(app);
require('./routes/category.routes')(app);
require('./routes/cloth.routes')(app);

const db = require("./models");
//require('./routes/cloth.routes')(app);
db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true 
    })
    .then(()=>{
        console.log("Successfully connected to MongoDb");

    })
    .catch(err=>{
        console.error("Connection error", err);
        process.exit();
    });

app.listen(8080, () => console.log('Example app listening on port 8080!'));