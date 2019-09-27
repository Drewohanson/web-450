const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userHistorySchema = new Schema({
  employeeId: {type: Schema.Types.ObjectId, ref: "Employee"},
  quiz_Name: {type: String},
  userQuizResults: [{type: Schema.Types.ObjectId, ref: "UserResults"}]
})

module.exports = mongoose.model('UserHistory', userHistorySchema);
