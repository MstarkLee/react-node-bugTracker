const mongoose = require("mongoose");

const BugsSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  feature: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
    min: 0,
    max: 2,
    default: 1
  },
  status: {
    type: String,
    enum: ["IN_PROGRESS", "COMPLETE", "OT_STARTED"],
    default: "IN_PROGRESS"
  },
  submittedBy: {
    type: String,
    required: true
  },
  submittedDate: {
    type: Date
  },
  modifiedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Bugs = mongoose.model("bugs", BugsSchema);
