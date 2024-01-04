const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 80;
const bodyParser = require("body-parser");
const db = require("./db");
const router = require("./routes");

db.connect();


app.use(bodyParser.json({ limit: "50mb" }));      //Middleware Setup
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


app.use((req, res, next) => {     //CORS Configuration
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
});


app.use("/api", router);      //API Routes

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));     //Serve Static Files
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {        //Fallback Route
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Oops! unexpected error");
  }
});

app.use(cors());


app.listen(process.env.PORT || PORT, () => {      //Start the Server
  console.log(`Listening on port no ${PORT}`);
});


