const express = require('express');
const  path = require('path');
const  bodyParser = require('body-parser');
const  cors = require('cors');
const  mongoose = require('mongoose');
const  config = require('./DB');
const  books = require ('../routes/books');
const  orders = require ('../routes/orders');
const  posts = require ('../routes/posts');
const  admin = require ('../routes/admin');
const  quotes = require ('../routes/quotes');
const  messages = require ('../routes/messages');
const  category = require ('../routes/category');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB);
      
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/books', books);
app.use('/orders', orders);
app.use('/posts', posts);
app.use('/quotes', quotes);
app.use('/admin', admin);
app.use('/messages', messages);
app.use('/category', category);
var port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log('NodeJS Server Port: ', port);
});