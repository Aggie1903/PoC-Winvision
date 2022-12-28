// server.js API 

// Libraries
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const express = require('express');
const bodyParser = require('body-parser');
const shortid = require('shortid');
const _ = require('lodash');
const adapter = new FileSync('db.json');
const db = low(adapter);
const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
  });


app.post('/api/answers', (req, res) => {
  var answer = req.body;

  db.get('answer')
      .push(answer)
      .write();

  res.send('answer received');
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
