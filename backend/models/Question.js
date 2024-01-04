//Mongoose schema for questions
const mongoose = require("mongoose");     //Import Mongoose

const QuestionSchema = new mongoose.Schema({        //Define Question Schema
  questionName: String,
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers",
  },
  upVote : Number,
  downVote : Number,
  shareLink : String ,
  user: Object,
});

module.exports = mongoose.model("Questions", QuestionSchema);     //Create Model