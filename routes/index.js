var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
      message: "Blue 22, We got motion, On 1, On 1, Down, Set, Generator!"
  })
});

module.exports = router;