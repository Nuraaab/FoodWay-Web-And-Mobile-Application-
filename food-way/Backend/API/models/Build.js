const mongoose = require('mongoose');

const BuildSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  buildImage: {
    type: String,
  },
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
  },
});

module.exports = mongoose.model('Build', BuildSchema);