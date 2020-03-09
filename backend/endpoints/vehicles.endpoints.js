const {
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle
} = require('../business/vehicles.business');
const express = require('express');
const router = express.Router();

router.get('/api/vehicles', getVehicles);

router.get('/api/vehicles/:id', getVehicle);

router.post('/api/vehicles', createVehicle);

router.put('/api/vehicles/:id', updateVehicle);

router.delete('/api/vehicles/:id', deleteVehicle);

module.exports = router;