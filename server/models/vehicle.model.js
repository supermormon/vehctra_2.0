const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customInfoSchema = new Schema({
  title: { type: String, required: true},
  info: { type: String, required: true}
});

const vehicleSchema = new Schema({
  id: { type: String, required: true },
  make: { type: String, required: true},
  model: { type: String, required: true},
  year: { type: String, required: true},
  vin: { type: String },
  licensePlate: { type: String },
  image: { type: String },
  customInfos: [{ type: customInfoSchema }],
  serviceEntries: [{ type: mongoose.Types.ObjectId, ref: 'ServiceEntry' }],
  fuelEntries: [{ type: mongoose.Types.ObjectId, ref: 'FuelEntry' }],
});

module.exports = mongoose.model('Vehicle', vehicleSchema);