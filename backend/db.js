const mongoose = require("mongoose");

const url = "mongodb+srv://bt1362023:Ankit123@cluster0.xva4dr9.mongodb.net/?retryWrites=true&w=majority";
 
module.exports.connect = () => {
  mongoose
    .connect(url, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};