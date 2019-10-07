const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var employeeSchema = new Schema({
  employeeId: { type: String, required: true },
  firstName: { type: String },
  lastName: {type: String},

}, {collection: 'nodeQuiz'});

module.exports = mongoose.model("Employee", employeeSchema);
