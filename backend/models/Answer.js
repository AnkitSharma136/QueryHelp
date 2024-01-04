//Mongoose schema for answers
const mongoose = require("mongoose");   //Import Mongoose:

const AnswerSchema = new mongoose.Schema({    //Define Answer Schema
  answer: String,
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

module.exports = mongoose.model("Answers", AnswerSchema);   //Create Model