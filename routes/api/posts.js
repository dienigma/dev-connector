const express = require("express");
const router = express.Router();

// @router  GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ message: "posts works" }));

module.exports = router;
