const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sequenceSchema = new Schema({
  id: { type: String, required: true },
  maxVehicleId: { type: Number },
});

module.exports = mongoose.model('Sequence', sequenceSchema);