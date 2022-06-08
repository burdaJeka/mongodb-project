const mongoose = require("mongoose");

const soldierSchema = {
  id: {
    type: Number,
    unique: true,
    required: [true, "soldier must have id"],
  },
  name: {
    type: String,
    required: [true, "soldier must have name"],
  },
  surname: {
    type: String,
    required: [true, "soldier must have surname"],
  },
  age: {
    type: Number,
    required: [true, "soldier must have age"],
  },
  rank: {
    type: String,
    type: String,
    required: [true, "soldier must have rank"],
  },
  gender: {
    type: String,
    required: [true, "soldier must have gender"],
  },
};

const Soldier = mongoose.model("soldier", soldierSchema);
module.exports = {
  Soldier,
};
