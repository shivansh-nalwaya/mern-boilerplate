const UserModel = require("./UserModel");
const ItemModel = require("./ItemModel");
const mongoose = require("mongoose");

module.exports = {
  UserModel: mongoose.model("user", UserModel),
  ItemModel: mongoose.model("item", ItemModel)
};
