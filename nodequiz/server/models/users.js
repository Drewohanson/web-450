/*
=====================================
  ; Title: employee.js
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: employee.js schema file
======================================
*/

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: { type: String, required: true},
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
}, { collection: 'users'});

module.exports = mongoose.model('User', userSchema);
