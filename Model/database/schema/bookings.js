const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookingsSchema = {
  client: {
    type: ObjectId,
    ref: "Client",
  },
  date: {
    type: Date,
  },
  services: [
    {
      _id: {
        type: ObjectId,
        ref: "Services",
      },
    },
  ],
  price: {
    type: Number,
    default: 0,
  },
  note: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Processing", "Finished"],
    default: "Processing",
  },
  timeOfBooking: {
    type: Number,
  },
  duration: {
    type: Number,
  },
};
module.exports = mongoose.model("Bookings", bookingsSchema);
