const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const soldierSchema = {
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    require: true,
  },
  surname: String,
  age: Number,
  rank: String,
  gender: String,
};
// const soldierSchema = Schema({
//   name: {
//     type: String,
//     require: [true, "soldier must have name"],
//     minlength: 2,
//   },
//   surname: {
//     type: String,
//     require :[true , "soldier must have surname"],
//     minlength: 2,
//   },
//   age: {
//     type: Number,
//     require: true,
//     min: 18,
//     minlength: 2,
//   },
//   rank: {
//     type: String,
//     require: true,
//     minlength: 2,
//   },
//     active: {
//      type: Boolean,
//      default: true,
//    },
// status: {
//   type: String,
//   enum: ["sale", "stock", "promocode"],
//   default: "sale"
// },
// code: {
//   type: String,
//   require: true,
//   unique: true, //need configure BD
//   match: /^[0-9]{9}$/
// }
// passport: { think about
//   type:String,
//   match:/^[А-Я]{2}[0-9]{6}$/
// }
const Soldier = mongoose.model("soldier", soldierSchema);
module.exports = {
  Soldier,
};
