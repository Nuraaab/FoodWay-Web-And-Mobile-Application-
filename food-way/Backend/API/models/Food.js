const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
});

module.exports = mongoose.model('Food', FoodSchema);