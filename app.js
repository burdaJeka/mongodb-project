const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const { cache } = require("ejs");
const soldierRoutes = require("./routes/soldier");
const app = express();
const { DB_HOST, PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, "public")));
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(soldierRoutes);

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server started...\n${new Date()}\nServer port is : ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
