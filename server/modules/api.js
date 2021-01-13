var express = require('express');
const router = express.Router();
var db = require('../datastore/datastore.js');
var moment = require('moment');
const axios = require('axios');
const { reject, value } = require('../datastore/datastore.js');
const { response } = require('express');

//const evenCheck = require('is-even');

/* we believe this was causing our website to not display on local host when run
function iseven(number){ //added is-even npm functionality
    var response = isEven(number);
    res.send(response); //no current usage right onw
};*/

 class singletonClass{
  
    constructor(){
      if(singletonClass.instance instanceof singletonClass){
        return singletonClass.instance;
      }
      Object.freeze(this);
      singletonClass.instance = this;
    }
      
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

const promise1 = new Promise((resolve,reject)=>{
  resolve(shed.requestJoke());
})
promise1.then(x=>{
  console.log(x);
})
const promise2 = new Promise((resolve,reject)=>{
  resolve(shed.requestJoke());
})
promise2.then(x=>{
  console.log(x);
})





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
router.get('/joke',  (req, res) => {
  if(req.body.value === true){ 
    console.log(p.request.text);
    res.status(200).send(p.request);
  }else{
    res.status(200).send(req.body.value);
  }
});

router.post('/newUser', (req, res) => {
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
//module.exports = iseven; 