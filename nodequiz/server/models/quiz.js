/*
=====================================
  ; Title: quiz.js
  ; Author: Drew Hanson
  ; Date: October 02 2019
  ; Description: quiz.js schema file
======================================
*/

const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    id: Number ,
    answer: { type: String }
})

const questionsSchema = mongoose.Schema({
    id: Number ,
    question: String ,
    correct_answer: Number,
    question_answers: [answerSchema]
})

const quizSchema = mongoose.Schema({
    quizId: String,
    quiz_name: String ,
    questions: [questionsSchema]
}, { collection: 'quizzes' });


module.exports = mongoose.model('Quiz', quizSchema);
