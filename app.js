const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes/index");
const app = express();
require("dotenv").config();
const { DB_HOST, PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, "public")));
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(routes.soldierRoutes, routes.apiSoldierRoutes);

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
