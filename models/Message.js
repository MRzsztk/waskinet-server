const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const messageSchema = new Schema({
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;