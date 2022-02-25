const CryptoJS = require("crypto-js");
// const {
//     verifyToken,
//     verifyTokenAuth
// } = require("./verifyToken");

// const User = require("../models/User");
// const router = require("express").Router();
// router.put("/:id", verifyTokenAuth, async (req, res) => {
//     if (req.body.password) {
//         req.body.password = CryptoJS.AES.encrypt(
//             req.body.password,
//             process.env.PASS_KEY
//         ).toString();
//     }

//     try {
//         const updatedUser = await User.findByIdAndUpdate(
//             req.params.id, {
//                 $set: req.body,
//             }, {
//                 new: true,
//             }
//         );
//         res.status(200).json(updatedUser);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.put("/:id", verifyToken, async (req, res) => {
//     if (req.body.password) {
//       req.body.password = CryptoJS.AES.encrypt(
//         req.body.password,
//         process.env.PASS_SEC
//       ).toString();
//     }
  
//     try {
//       const updatedUser = await User.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       );
//       res.status(200).json(updatedUser);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  
// module.exports = router;


const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAuth,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  };

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;