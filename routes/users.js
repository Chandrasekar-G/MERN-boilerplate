var express = require("express"),
    router = express.Router(),
    model = require("../models/userModel"),
    STATUS_CODE = require("../constants/statusCodes").STATUS_CODE;

/* GET users listing. */
router.get("/", function(req, res, next) {
  try {
    var userModel = model.User;
    userModel.find().exec().then(resp => {
      res.json({
        isSuccess: true,
        data: resp
      })
    });
  } catch(err) {
    res.json({
      isSuccess: false,
      error: STATUS_CODE.SERVER_ERROR
    });
  }
});

module.exports = router;
