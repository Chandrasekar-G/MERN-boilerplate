var mongoose = require("mongoose");
var db = mongoose.connection;

exports.createConnection = function() {
    if(process.env.MONGO_URL) {
        mongoose.connect(process.env.MONGO_URL);
    } else {
        mongoose.connect("mongodb://localhost/mern");
    }
};

db.on("error", function() {
  console.log("Some error while connecting to DB");
});

db.once("open", function() {
  console.log("We're connected");
});