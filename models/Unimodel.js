const mongoose = require("mongoose");

const uniSchema = new mongoose.Schema({
  index: Number,
  title: String,
  degrees: String,
  funds: String,
  date: String,
  location: String,
});

const Uni = mongoose.model("Uni", uniSchema);

module.exports = Uni;
