const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const { check, validationResult } = require("express-validator/check");

//User model import
const Bugs = require("../../models/Bugs");

//@route   GET api/bugs
//@desc    List all Bugs
//@access  public
router.get("/", async (req, res) => {
  try {
    const bugs = await Bugs.find();
    res.json(bugs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/bugs/:id
// @desc     Get bug by ID
// @access   public
router.get("/:id", async (req, res) => {
  try {
    const bugs = await Bugs.findById(req.params.id);

    if (!bugs) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(bugs);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    POST api/bugs
// @desc     Create bug item
// @access   Private
router.post(
  "/",
  [
    check("description", "description is required")
      .not()
      .isEmpty(),
    check("feature", "feature is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      description,
      feature,
      modifiedDate,
      priority,
      status,
      submittedBy,
      submittedDate
    } = req.body;

    // Build Bug object
    const bugFields = {};
    if (description) bugFields.description = description;
    if (feature) bugFields.feature = feature;
    if (modifiedDate) bugFields.modifiedDate = modifiedDate;
    if (priority) bugFields.priority = priority;
    if (status) bugFields.status = status;
    if (submittedBy) bugFields.submittedBy = submittedBy;
    if (submittedDate) bugFields.submittedDate = submittedDate;

    try {
      // Create
      bugs = new Bugs(bugFields);

      await bugs.save();
      res.json(bugs);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    PUT api/bugs/:id
// @desc     Update a bug
// @access   public
router.put(
  "/:id",
  [
    check("description", "description is required")
      .not()
      .isEmpty(),
    check("feature", "feature is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // const {
    //   description,
    //   feature,
    //   modifiedDate,
    //   priority,
    //   status,
    //   submittedBy,
    //   submittedDate
    // } = req.body;

    // // Build Bug object
    // const bugFields = {};
    // if (description) bugFields.description = description;
    // if (feature) bugFields.feature = feature;
    // if (modifiedDate) bugFields.modifiedDate = modifiedDate;
    // if (priority) bugFields.priority = priority;
    // if (status) bugFields.status = status;
    // if (submittedBy) bugFields.submittedBy = submittedBy;
    // if (submittedDate) bugFields.submittedDate = submittedDate;

    try {
      const bugs = await Bugs.findByIdAndUpdate(
        // the id of the item to find
        req.params.id,

        // the change to be made. Mongoose will smartly combine your existing
        // document with this change, which allows for partial updates too
        req.body,

        // an option that asks mongoose to return the updated version
        // of the document instead of the pre-updated one.
        { new: true }
      );

      res.json(bugs);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
