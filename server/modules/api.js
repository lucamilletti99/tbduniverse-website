var express = require('express');
const router = express.Router();
var db = require('../datastore/datastore.js');
var moment = require('moment');
const axios = require('axios');

class singletonClass{
  constructor(){
    let singleton = new Object();
    singleton.request = axios.get('https://api.chucknorris.io/jokes/random')
  .then(response => {
      var joke = response.data.value;
      console.log(joke);
  })
  .catch(error => {
      console.log(error);
  }); 
  }
}
const p = new singletonClass();

//ReST Functions
router.get('/posts',  (req, res) => {
  var data = db.get('posts').value();
  res.status(200).json(data);
});

router.post('/posts', (req, res) => {
  var newPost = {
    text: req.body.text,
    id: new Date().getTime(),
    date: moment().format('MMM Do, HH:mm')
  };

  if (req.body.text) {
    db.get('posts').push(newPost).write();
    res.send(newPost);
  } else {
    res.status(400).send(newPost);
  }
});

router.delete('/posts/:id', (req, res) => {
  var deleteResult = db.get('posts').remove({ id: parseInt(req.params.id, 10) }).write();

  if (deleteResult.length) {
    res.status(200).send(deleteResult);
  } else {
    res.status(400).send(deleteResult);
  }
});

//get and post request by jeff van buskirk
router.get('/jeffOne',  (req, res) => {
  var data = db.get('people').value();
  res.status(200).json(data);
});

router.post('/jeffTwo', (req, res) => {
  var newPerson = {
    firstName: req.body.text,
    LastName: req.body.text
  }

  if (req.body.text) {
    db.get('people').push(newPerson).write();
    res.send(newPerson);
  } else {
    res.status(400).send(newPost);
  }
});


module.exports = router;