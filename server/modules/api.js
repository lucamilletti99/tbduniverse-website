var express = require('express');
const router = express.Router();
var db = require('../datastore/datastore.js');
var moment = require('moment');
const axios = require('axios');
const { reject, value } = require('../datastore/datastore.js');
const { response } = require('express');

 class singletonClass{
  
    constructor(){
      if(singletonClass.instance instanceof singletonClass){
        return singletonClass.instance;
      }
      Object.freeze(this);
      singletonClass.instance = this;
    }
      static ID = 1;
      requestJoke(){ 
      return axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => {
         return response.data.value;
      })
      .catch(error => {
          console.log(error);
          return -1;
      });
    }
    
}



let shed = new singletonClass(); 

const promise2 = new Promise((resolve,reject)=>{
  resolve(shed.requestJoke());
})
promise2.then(x=>{
  console.log(x);
})



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

//get and post request by jeff van buskirk and Blake Van Wilkey
router.get('/joke',  (req, res) => {
  if(req.body.value === true){ 
    const promise1 = new Promise((resolve,reject)=>{
      resolve(shed.requestJoke());q
    })
    promise1.then(x=>{
      res.status(200).send(x);
    })
  }else{
    res.status(200).send(req.body.value);
  }
});

router.post('/newPerson', (req, res) => {

  if (req.body.text) {
    var shedder = {
      id: shed.ID,
      preference: req.body.cookie
    }
    db.get('users').push(shedder).write();
    shed.ID++;
    res.status(200).send(shedder);
  } else {
    res.status(400).send(req.body);
  }
});

router.post('/jokeSubmit', (req, res) => {
  var newPost = {
    text: req.body.text,
  };
  if (req.body.text) {
    db.get('posts').push(newPost).write();
    res.send(newPost);
    res.send("Your joke was funny!")
  } else {
    res.status(400).send(newPost);
  }
});

module.exports = router;