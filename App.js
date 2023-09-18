const express = require('express')
const {engine} = require('express-handlebars')
const path = require('path')
const route = require("./routes/routers.js");
const mongoose = require('mongoose')
// const user_routes =require('./routes/user_routes.js')

require('dotenv').config()

const app = express();

mongoose.connect('mongodb+srv://Zwar:DarkyWarky@zwardb.1makfjy.mongodb.net/Nfc_hackathon')

app.use('/public', express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      }
    }
}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/', route);

// app.use('/auth',user_routes);

app.listen(4000,()=>{
  console.log("http://localhost:4000")
});