//an Express route for handling the creation of answers
const express = require("express");
const router = express.Router();

const answerDB = require("../models/Answer");

router.post("/", async (req, res) => {    //Define a POST Route
  try {
    await answerDB      //Create Answer Document
      .create({
        answer: req.body.answer,
        questionId: req.body.questionId,
        user: req.body.user,
      })
      .then(() => {     //Handle Success and Errors
        res.status(201).send({    // Respond with a success message if the answer is added successfully
          status: true,
          message: "Answer added successfully",
        });
      })
      .catch((e) => {
        res.status(400).send({    // Handle errors related to the creation of the answer
          status: false,
          message: "Bad request",
        });
      });
  } catch (e) {
    res.status(500).send({    // Handle general errors
      status: false,
      message: "Error while adding answer",
    });
  }
});

module.exports = router;    //Export the Router