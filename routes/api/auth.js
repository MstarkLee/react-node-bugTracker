const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

//@route   POST api/users
//@desc    Register new user
//@access  public
router.get("/", async (req, res) => {
  console.log("Auth lists");
});
module.exports = router;
