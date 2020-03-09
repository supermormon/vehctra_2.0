const express = require('express');
const bodyParser = require('body-parser');
const vehicleRoutes = require('./backend/endpoints/vehicles.endpoints');
const serviceRoutes = require('./backend/endpoints/services.endpoints');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods", 
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.use(vehicleRoutes);
app.use(serviceRoutes);

module.exports = app;