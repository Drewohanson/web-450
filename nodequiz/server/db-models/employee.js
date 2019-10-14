/*
=====================================
  ; Title: employee.js
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: employee.js schema file
======================================
*/


const mongoose = require('mongoose');

let employeeSchema = mongoose.Schema({
  employeeId: String,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('employee', employeeSchema);
