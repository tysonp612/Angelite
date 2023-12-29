const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  service: {
    type: String,
    trim: true,
    required: [true, "Service name is required"],
  },
  price: {
    type: Number,
    required: [true, "Each service must have a price"],
  },
  color: {
    type: String,
    require: [true, "Each service must have a color"],
  },
});

module.exports = mongoose.model("Services", servicesSchema);
