const mongoose = require("mongoose");
const { Schema } = mongoose;

const profilesSchema = new Schema(
  {
    bmi: String,
    gender: String,
    conumber: String,
    name: { type: String, required: [true, 'Name is required!'], minlength: [2, "Name but be atleast 3 letters!"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profiles", profilesSchema);
