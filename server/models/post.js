const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  images: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: " ",
  },
  date0: {
    type: String,
    default: Date.now(),
  },
  place: {
    type: String,
    default: " ",
  },
  content: {
    type: String,
    default: " ",
  },
});

module.exports = mongoose.model("Post", postSchema);
