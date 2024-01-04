const express = require("express");
const router = express.Router();

const questionDB = require("../models/Question");

router.post("/", async (req, res) => {    //Define a Route to Add a Question
    console.log(req.body);
  
    try {
      await questionDB
        .create({
          questionName: req.body.questionName,
          questionUrl: req.body.questionUrl,
          user: req.body.user,
          upVote : req.body.upVote,
          downVote :req.body.downVote,
        })
        .then(() => {
          res.status(201).send({
            status: true,
            message: "Question added successfully",
          });
        })
        .catch((err) => {
          res.status(400).send({
            staus: false,
            message: "Bad format",
          });
        });
    } catch (e) {
      res.status(500).send({
        status: false,
        message: "Error while adding question",
      });
    }
});

router.get("/", async (req, res) => {     //Define a Route to Get All Questions
  try {
    await questionDB
      .aggregate([
        {
          $lookup: {
            from: "answers", //collection to join
            localField: "_id", //field from input document
            foreignField: "questionId",
            as: "allAnswers", //output array field
          },
        },
      ])
      .exec()
      .then((doc) => {
        res.status(200).send(doc);
      })
      .catch((error) => {
        res.status(500).send({
          status: false,
          message: "Unable to get the question details",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});

router.get('/:id' , async(req , res) => {     //Define a Route to Get a Specific Question by ID
  try {
    await questionDB 
    .findById(req.params.id)
    .exec()
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((error) => {
      res.status(500).send({
        status: false,
        message: "No question with this id",
      });
    });
  }
  catch (e) {
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});

router.get('/findQuestion/:questionName', async (req, res) => {
  try {
    const doc = await questionDB.aggregate([
      {
        $match: {
          questionName: req.params.questionName,
        },
      },
      {
        $lookup: {
          from: 'answers',
          localField: '_id',
          foreignField: 'questionId',
          as: 'allAnswers',
        },
      },
    ]);

    if (doc && doc.length > 0) {
      res.status(200).send(doc[0]); // Send the first element of the array
    } else {
      res.status(404).send({
        status: false,
        message: "No question with this name",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});


module.exports = router;