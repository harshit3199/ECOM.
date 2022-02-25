const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,

    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(401).json("Invalid Email");

    var hashed = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (hashed !== req.body.password) {
      res.status(401).json("Invalid Password");
      return;
    }

    const accessToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC, {
        expiresIn: "3d"
      }
    );
    const {
      password,
      ...others
    } = user._doc;

    res.status(200).json({
      ...others,
      accessToken
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;