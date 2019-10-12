/*
=====================================
  ; Title: quiz.js
  ; Author: Drew Hanson
  ; Date: October 02 2019
  ; Description: quiz.js schema file
======================================
*/


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    quizId: {type: Number},
    name: {type: String, required: true},
    questions: [{
        questionNumber: {type: Number},
        questionText: {type: String},
        answers: [{
            answerLetter: {type: String},
            answerText: {type: String},
            isCorrect: {type: Boolean}
        }]
    }]
})

module.exports = mongoose.model('Quiz', QuizSchema);
