const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Connect to database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log('FAILED!' + err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

// helps handle CORS related issues that you might face when trying to access the api 
// from different domains during development and testing
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

if (process.env.NODE_ENV === 'production') {

  // automatic redirect to https
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next();
  })

  app.use(express.static('client/build'));
}

app.use(bodyParser.json());

app.use('/api', routes);

app.get('/*', (req, res) => {
  res.sendFile('client/build/index.html', { root: __dirname }), function(err) {
    if (err) {
      res.status(500).send(`This is the error: ${err}`);
    }
  }}
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});