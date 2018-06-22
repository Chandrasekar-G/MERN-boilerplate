var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema
var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    required: true
  }
});

exports.User = mongoose.model("User", UserSchema, "Users");