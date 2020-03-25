const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceEntrySchema = new Schema({
  date: { type: String },
  odometer: { type: Number },
  services: { type: mongoose.Types.ObjectId},
  notes: { type: String },
  receipt: { type: String }
});

module.exports = mongoose.model('ServiceEntry', serviceEntrySchema);