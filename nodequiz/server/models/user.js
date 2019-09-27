const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  employeeId: { type: String, required: true },
  userName: {type: String},
  employeeQuizHistory: [{type: Schema.Types.ObjectId, ref: "EmployeeHistory"}]
})

module.exports = mongoose.model('User', UserSchema);
