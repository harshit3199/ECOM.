const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test successful");
});

module.exports = router;
