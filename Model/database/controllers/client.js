const Client = require("./../schema/client");
const Bookings = require("./../schema/bookings");

exports.createClient = async (req, res) => {
  try {
    const { first_name, last_name, number, email } = req.body.data;
    const newClient = await new Client({
      first_name,
      last_name,
      number,
      email,
    }).save();
    res.status(200).json({
      id: newClient._id,
      ...newClient.toObject(),
      message: "New client created successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findClient = async (req, res) => {
  try {
    const { keyword } = req.body;
    const terms = keyword.split(" ");
    const re = new RegExp(terms.join("|"), "ig");

    const clients = await Client.find({
      $or: [
        { fullName: { $regex: re } },
        { number: { $regex: keyword } },
        { email: { $regex: keyword } },
      ],
    });

    if (clients.length > 0) {
      res.status(200).json({ clients });
    } else {
      res.status(200).json({ clients: null, message: "No client found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



//EDIT CLIENT NEEDES TO BE TESTED TO REMOVE UNNECESSARY DATA SENT
exports.editClient = async (req, res) => {
  try {
    //Retrieve client id from request
    const { clientId } = req.body;
    // Find the client by ID
    const client = await Client.findById(clientId);

    if (!client) {
      throw new Error("Client not found");
    }

    // Update client data
    Object.assign(client, updatedData);

    // Save the updated client
    const updatedClient = await client.save();

    return updatedClient;
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

// Function to delete a client
exports.deleteClient=(clientId) =>{
  try {
    // Find the client by ID
    const client = await Client.findById(clientId);

    if (!client) {
      throw new Error("Client not found");
    }

    // Delete the client
    await client.remove();

    res.status(200).json({ message: "Client deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
}
