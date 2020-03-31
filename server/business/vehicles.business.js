const Vehicle = require('../models/vehicle.model');
const sequenceGenerator = require('../routes/sequenceGenerator');


/**
 * Get all vehicles
 * @param {Request} req 
 * @param {Response} res 
 */
function getVehicles(req, res) {
  Vehicle
  .find()
  .then(vehicles => {
    res.status(200).json(vehicles)
  })
  .catch(err => {
    returnError(res, err);
  });
}

/**
 * Get a single vehicle with id param
 * @param {Request} req 
 * @param {Response} res 
 */
function getVehicle(req, res) {
  if (!req.params.id) {
    res.status(400).json({error: "Request params missing"});
    return;
  }
  Vehicle
  .find({id: req.params.id})
  .then(vehicle => {
    if (!vehicle[0]) {
      res.status(400).json({error: "No document with id of " + req.params.id});
    }
    res.status(200).json(vehicle[0]);
  })
  .catch(err => {
    returnError(res, err);
  })
}

/**
 * Post a single vehicle
 * @param {Request} req 
 * @param {Response} res 
 */
function createVehicle(req, res) {
  // logic here...
  // res.status(501).send();
  if (!req.body) {
    res.status(400).json({error: "Request body missing"});
    return;
  }
  var maxVehicleId = sequenceGenerator.nextId("vehicles");
  const newVehicle = new Vehicle({
    id: maxVehicleId,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    vin: req.body.vin,
    licensePlate: req.body.licensePlate,
    image: req.body.image,
    customInfos: req.body.customInfos,
    serviceEntries: req.body.serviceEntries,
    fuelEntries: req.body.fuelEntries,
  })

  if (newVehicle.serviceEntries && newVehicle.serviceEntries.length > 0) {
    newVehicle.serviceEntries.map((entry) => {
      return entry = entry._id;
    })
  }
  if (newVehicle.fuelEntries && newVehicle.fuelEntries.length > 0) {
    newVehicle.fuelEntries.map((entry) => {
      return entry = entry._id;
    })
  }

  newVehicle
  .save()
  .then(() => {
    getVehicles(req, res);
  })
  .catch(err => {
    returnError(res, err);
  })
}

/**
 * Put (update) a single vehicle with id param
 * @param {Request} req 
 * @param {Response} res 
 */
function updateVehicle(req, res) {
  if (!req.body || !req.params.id) {
    res.status(400).json({error: "Request body missing"});
    return;
  }
  if (req.body.serviceEntries && req.body.serviceEntries.length > 0) {
    newVehicle.serviceEntries.map((entry) => {
      return entry = entry._id;
    })
  }
  if (req.body.fuelEntries && req.body.fuelEntries.length > 0) {
    newVehicle.fuelEntries.map((entry) => {
      return entry = entry._id;
    })
  }
  Vehicle
  .findOneAndUpdate(
    {id: req.params.id},
    {
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      vin: req.body.vin,
      licensePlate: req.body.licensePlate,
      image: req.body.image,
      customInfos: req.body.customInfos,
      serviceEntries: req.body.serviceEntries,
      fuelEntries: req.body.fuelEntries,
    })
  .then(() => {
    res.status(204).send();
  })
  .catch(err => {
    returnError(res, error);
  });
}

/**
 * Delete a single vehicle with id param
 * @param {Request} req 
 * @param {Response} res 
 */
function deleteVehicle(req, res) {
  if (!req.params) {
    res.status(400).json({error: "Request parameters missing"});
    return;
  }
  Vehicle
  .findOneAndDelete({id: req.params.id})
  .then(() => {
    res.status(204).send();
  })
  .catch(err => {
    returnError(res, err);
  });
}


module.exports = {
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle
}


/**
 * Returns a server error with status 500
 * @param {Response} res 
 * @param {Error} error 
 */
function returnError(res, error) {
  res.status(500).json({error: error});
}