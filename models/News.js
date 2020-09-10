const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const newsSchema = new Schema({
  title: String,
  tags: Array,
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const News = mongoose.model("News", newsSchema);

module.exports = News;