const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

//User model import
const User = require("../../models/User");

//@route   POST api/users
//@desc    Register new user
//@access  public
router.get("/", async (req, res) => {
  res.send("Get bugs list");
});

module.exports = router;
