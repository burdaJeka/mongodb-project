const DB_HOST = require("./config.js");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3000;

require("./routes")(app);
mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection success !");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(PORT, () => {
  console.log(`Server started... \n${new Date()} \nServer port is : ${PORT}`);
});
