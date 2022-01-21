const mongoose = require("mongoose");
const { Schema } = mongoose;

const entriesSchema = new Schema(
  {
    height: Number,
    name: String,
    bmi: Number,
    gender: String,
    points: Number,
    title: String,
    descr: Number,
    profile_name: String,
    profiles_bmi_handle: String,
    weight: Number,
    designation: String,
    bmi: String,
    bodyfat: Number,
    country: String,
    profile_name: String,
    

    country_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    bmi_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bmi",
    },
    bodyfat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bodyfat",
      },
    profiles_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profiles",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Entries", entriesSchema);
