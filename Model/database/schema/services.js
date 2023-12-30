import mongoose from "mongoose";

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

export default mongoose.model("Services", servicesSchema);
