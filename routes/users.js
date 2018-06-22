var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json([
    {
      name: "name 1"
    },
    {
      name: "name 2"
    },
    {
      name: "name 3"
    },
    {
      name: "name 4"
    }
  ]);
});

module.exports = router;
