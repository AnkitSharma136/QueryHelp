const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");   //Use Sub-Routers for Specific Paths
const answerRouter = require("./Answer");

router.get("/", (req, res) => {   //Define a Root Route
  res.send("This api is reserved for quora clone");
});

router.use("/questions", questionRouter);   //Use Sub-Routers for Specific Paths
router.use("/answers", answerRouter);

module.exports = router;