/*
=====================================
  ; Title: quiz.js
  ; Author: Drew Hanson
  ; Date: October 02 2019
  ; Description: quiz.js schema file
======================================
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let quizSchema = new Schema({
  quiz_Id: { type: Schema.Types.ObjectId, ref: "quiz" },
  quiz_Name: { type: Schema.Types.ObjectId, ref: "quiz" },
  question: String,
  quiz_Answers: {
    answer_1: String,
    answer_2: String,
    answer_3: String,
    answer_4: String,
    correct_Answer: String
  }
});

let quizSchema = new Schema({
  quiz_Id: Number,
  quiz_Name: String,
  quiz_Questions: [quizSchema]
});

module.exports = mongoose.model("Quiz", quizSchema);
