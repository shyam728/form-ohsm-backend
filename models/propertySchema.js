const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  propertyType: {
    type: String,
    required: true,
  },
  propertyName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

// Create Property Model
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
