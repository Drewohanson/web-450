/*
=====================================
  ; Title: app.js
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: app.js for api
======================================
*/
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Employee = require('./models/employee')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

// Global variables
const serverPort = 3000;

/************************* Mongoose connection strings go below this line  ***************/
const connString = 'mongodb+srv://drewohanson12:Ezra0831!@buwebdev-cluster-1-o4yt9.mongodb.net/nodeQuiz?retryWrites=true&w=majority';

mongoose.connect(connString, {promiseLibrary:require('bluebird'), useNewUrlParser: true})
        .then(() => console.debug('Connection to the MongoDB instance was successful!'))
        .catch((err) => console.debug('MongoDB Error: ' + err.message));

/************************* API routes go below this line ********************/

/********************** Employee API Routes ********************************/
app.post('/api/employees', function(req, res, next) {
  const employee = {
    employeeId: req.body.employeeId,
    firstName: req.body.firstname,
    lastName: req.body.lastname
  };

  Employee.create(employee, function(err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  });
});

// Get employee by id
app.get("/api/employees/:id", function(req, res, next) {
  Employee.findOne({ employeeId: req.params.id }, function(err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  });
});
// Get all employees
app.get("/api/employees", function(req, res, next) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  });
});

/********************** Quiz API Routes ********************************/

//Create Quiz
app.post("/api/quizzes", function(req, res, next) {
  const quiz = {
    quiz_Id: req.body.quiz_Id,
    quiz_Name: req.body.quiz_Name,
    quiz_Questions: {
      question: req.body.quiz_Questions.question,
      quiz_Answers: {
        answer_1: req.body.quiz_Questions.quiz_Answers.answer_1,
        answer_2: req.body.quiz_Questions.quiz_Answers.answer_2,
        answer_3: req.body.quiz_Questions.quiz_Answers.answer_3,
        answer_4: req.body.quiz_Questions.quiz_Answers.answer_4,
        correct_Answer: req.body.quiz_Questions.quiz_Answers.correct_Answer
      }
    }
  };

  Quiz.create(quiz, function(err, quiz) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(quiz);
      res.json(quiz);
    }
  });
});

//Get all Quizzes
app.get('/api/quizzes/all', function(req, res, next) {
  Quiz.find(function(err, quizzes) {
    if (err) {
      console.log(err);
      return next(err);
    }  else {
      console.log(quizzes);
      res.json(quizzes);
    }
  })
});

//Get Quiz by Id
app.get('/api/quizzes/:id', function(req, res, next) {
  Quiz.findOne({'quizId': req.params.id}, function(err, quiz) {
    if (err) {
      console.log(err);
      return next(err);
    }  else {
      console.log(quiz);
      res.json(quiz);
    }
  })
});

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});
