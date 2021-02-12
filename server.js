const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB succesfully connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Hard work and grit have the server up and running on port ${port} !`));
