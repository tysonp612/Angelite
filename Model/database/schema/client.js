import mongoose from "mongoose";

const { Schema } = mongoose;

const clientSchema = new Schema(
  {
    first_name: {
      type: String,
      require: [true, "First name is required"],
      minlength: [2, "First name is too short"],
      maxlength: [32, "First name is too long"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [2, "Last name is too short"],
      maxlength: [32, "Last name is too long"],
      trim: true,
      text: true,
    },
    number: {
      type: String,
      required: [true, "Client's phone number is required"],
      trim: true,
      text: true,
      unique: [true, "This client has already been registered"],
    },
    email: {
      type: String,
      trim: true,
      sparse: true,
      index: true,
      unique: true,
    },
    bookings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Bookings",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Client", clientSchema);
