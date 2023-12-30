import mongoose from "mongoose";

const { Schema } = mongoose;

const bookingsSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
  date: {
    type: Date,
  },
  services: [
    {
      _id: {
        type: Schema.Types.ObjectId,
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
});

export default mongoose.model("Bookings", bookingsSchema);
