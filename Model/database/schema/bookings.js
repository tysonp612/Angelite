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
  },
  note: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Processing", "Finished"],
    default: "Processing",
  },
  time_of_booking: {
    type: Number,
  },
  period: {
    type: Number,
  },
};
module.exports = mongoose.model("Bookings", bookingsSchema);
