const mongoose = require("mongoose");
const { Schema } = mongoose;

const bodyfatSchema = new Schema(
    {
        name: { type: String, required: [true, 'Name is required'] },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Bodyfat", bodyfatSchema);