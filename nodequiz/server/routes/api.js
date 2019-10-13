

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const User = require('../models/users');
const Quiz = require('../models/quiz')

const connString = 'mongodb+srv://drewohanson12:Ezra0831!@buwebdev-cluster-1-o4yt9.mongodb.net/nodeQuiz?retryWrites=true&w=majority';

mongoose.connect(connString, {promiseLibrary:require('bluebird'), useNewUrlParser: true})
        .then(() => console.debug('Connection to the MongoDB instance was successful!'))
        .catch((err) => console.debug('MongoDB Error: ' + err.message));

// apit posting new user to database
router.post('/users', (req, res, next) => {
    let userData = req.body;
    const user = new User(userData);
    user.save();
    res.status(201).json({
      message: user
    })
  })

  // api retrieving specific user ID
router.get('/users/:id', (req, res, next) => {
    User.findOne({'id': req.params.id}, (err, users) => {
        if(err) {
            console.log(err);
        } else
            if(!users) {
                res.status(401).send('invalid id');
        } else {
            res.status(201).json({
                users: users
            })
        }
        console.log(users);
    })
  });


// test api to get quiz with ID from database
  router.get('/quiz/:id', (req, res, next) => {
    Quiz.findOne({ 'quizId' : req.params.id}, (err, quiz) => {
      console.log(quiz);
        if(err) {
            console.log(err);
        } else
            if(!quiz) {
                res.status(401).send('no quiz found.');
        } else {
            res.status(201).json({
              quiz
            })
        }
        console.log(quiz);
    })
  });

// login api
  router.post('/login', (req, res, next) => {
    let userData = req.body
    User.findOne({id: userData.id}, (err, user) => {
      if (err) {
        console.log(err)
      } else {
        if (!user) {
          res.status(401).send('Invalid ID')
        }
        else {
            let payload = { subject: user.id }
            let token = jwt.sign(payload, 'tokenKey', {expiresIn: '4h'})
          res.status(200).send({token,payload})
        }
      }
    })
  })

  router.get('/quiz', (req, res, next) => {
    Quiz.find({'quizId': req.body.quizId}, (err, res) => {
      if(err) {
        console.log(err)
      } else {
        if(!res) {
          console.log('no entries found')
        } else {
          console.log(res);
          res.status(200).send(res)
        }
      }
    })
  })


module.exports = router;
