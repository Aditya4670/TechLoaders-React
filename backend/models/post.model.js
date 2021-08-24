const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Posts = new Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
      type: String,
      required: true
  },
  content: {
      type: String,
      required: true
  }
}, {
    timestamps: true
});

module.exports = mongoose.model("Posts", Posts);