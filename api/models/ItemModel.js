const mongoose = require("mongoose");

const ItemModel = new mongoose.Schema({
  title: { type: String, required: true },
  created_at: { type: Date, default: new Date() },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

module.exports = ItemModel;
