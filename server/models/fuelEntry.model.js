const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fuelEntrySchema = new Schema({
  date: { type: String },
  odometer: { type: Number },
  gallons: { type: Number },
  notes: { type: String },
  receipt: { type: String }
});

module.exports = mongoose.model('FuelEntry', fuelEntrySchema);