// models/footprintData.js

const mongoose = require('mongoose');

const FootprintSchema = new mongoose.Schema({
  user: String,
  email: String,
  travel: Number,
  electricity: Number,
  diet: Number,
  water: Number,
  totalCarbonFootprint: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Footprint', FootprintSchema);
