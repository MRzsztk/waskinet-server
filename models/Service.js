const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
  category: String,
  subcategory: String,
  service: String,
  price: Number,
  unit: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;