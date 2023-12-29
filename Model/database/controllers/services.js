const Services = require("./../schema/services");

exports.createService = async (req, res) => {
  try {
    const { service, price, color } = req.body.serviceData;
    const service = await Services.create({ service, price, color });
    res.status(201).json({ service, message: "Service created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.status(200).json({ services });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.body;
    const serviceToDelete = await Services.findByIdAndDelete(id);

    if (serviceToDelete) {
      res.status(200).json({ message: "Service deleted successfully" });
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    console.error("Error deleting service:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//THIS EDIT NEEDS TO BE TESTED AND CHANGED TO REDUCE BANDWIDTH FOR UPDATING DATA
exports.editService = async (req, res) => {
  try {
    const { id, updatedServiceData } = req.body;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Service ID is required for editing" });
    }
    //find the service by ID
    const service = await Services.findByIdAndUpdate(id, updateServiceData, {
      new: true,
    });
    //Check if service was found and updated
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ service, message: "Service updated successfully!" });
  } catch (err) {
    console.error("Error editing service:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
