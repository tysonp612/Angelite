import Services from "../schema/services.js";

export const createService = async (req, res) => {
	try {
		const { service, price, color, duration, description } =
			req.body.serviceData;
		const newService = await Services.create({
			service,
			price,
			color,
			duration,
			description,
		});
		res.status(201).json({ service: newService, message: "Service created" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

export const getAllServices = async (req, res) => {
	try {
		const services = await Services.find();
		res.status(200).json({ services });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

export const deleteService = async (req, res) => {
	try {
		const { serviceId } = req.body;
		const serviceToDelete = await Services.findByIdAndDelete(serviceId);

		if (serviceToDelete) {
			res.status(200).json({ message: "Service deleted successfully" });
		} else {
			res.status(404).json({ message: "Service not found" });
		}
	} catch (err) {
		console.error("Error deleting service:", err.message);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const findService = async (req, res) => {
	try {
		const { serviceId } = req.body;
		const service = await Services.findById(serviceId);
		if (service) {
			res.status(200).json({ message: "Service found successfully", service });
		} else {
			res.status(404).json({ message: "Service not found" });
		}
	} catch (err) {
		console.error("Error finding service:", err.message);
		res.status(500).json({ message: "Internal server error" });
	}
};

// THIS EDIT NEEDS TO BE TESTED AND CHANGED TO REDUCE BANDWIDTH FOR UPDATING DATA
export const editService = async (req, res) => {
	try {
		const { serviceId, serviceData } = req.body;
		if (!serviceId) {
			return res
				.status(400)
				.json({ message: "Service ID is required for editing" });
		}
		// find the serv ice by ID
		const service = await Services.findByIdAndUpdate(serviceId, serviceData, {
			new: true,
		});
		// Check if service was found and updated
		if (!service) {
			return res.status(404).json({ message: "Service not found" });
		}
		res.status(200).json({ service, message: "Service updated successfully!" });
	} catch (err) {
		console.error("Error editing service:", err.message);
		res.status(500).json({ message: "Internal server error" });
	}
};

const servicesController = {
	createService,
	getAllServices,
	deleteService,
	findService,
	editService,
};

export default servicesController;
