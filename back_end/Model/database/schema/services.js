import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
	service: {
		type: String,
		trim: true,
		required: [true, "Service name is required"],
	},
	description: {
		type: String,
		trim: true,
	},
	price: {
		type: Number,
		required: [true, "Each service must have a price"],
	},
	color: {
		type: String,
		require: [true, "Each service must have a color"],
	},
	duration: {
		type: Number,
		required: [true, "Duration in minutes is required"],
	},
});

export default mongoose.model("Services", servicesSchema);
