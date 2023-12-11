const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  propertyname: {
    type: String,
    required: true,
  },
  propertyInventoryType: {
    type: String,
    required: true,
  },
  otherPropertyInventoryType: {
    type: String,
  },
  capacity: {
    type: Number,
    required: true,
  },
  amenities: {
    type: String,
  },
  availabilityStatus: {
    type: String,
    enum: ['Available', 'Occupied', 'Under Maintenance'],
    required: true,
  },
  notes: {
    type: String,
  },
});

const Inventory = mongoose.model('Inventory', InventorySchema); // Change the model name to 'Inventory'

module.exports = Inventory;
