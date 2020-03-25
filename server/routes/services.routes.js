const {
  getServices,
  getService,
  createService,
  updateService,
  deleteService
} = require('../business/services.business');
const express = require('express');
const router = express.Router();

router.get('/api/services', getServices);

router.get('/api/services/:id', getService);

router.post('/api/services', createService);

router.put('/api/services/:id', updateService);

router.delete('/api/services/:id', deleteService);

module.exports = router;