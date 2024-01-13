import Client from "../schema/client.js";

export const createClient = async (req, res) => {
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

export const findClient = async (req, res) => {
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

export const editClient = async (req, res) => {
  try {
    // Retrieve client id from request
    const { clientId, updatedData } = req.body;
    // Find the client by ID
    const client = await Client.findById(clientId);

    if (!client) {
      throw new Error("Client not found");
    }

    // Update client data
    Object.assign(client, updatedData);

    // Save the updated client
    const updatedClient = await client.save();

    res.status(200).json(updatedClient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    // Retrieve client id from request
    const { clientId } = req.body;
    // Find the client by ID
    const client = await Client.findById(clientId);

    if (!client) {
      throw new Error("Client not found");
    }

    // Delete the client
    await client.remove();

    res.status(200).json({ message: "Client deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const clientController = {
  createClient,
  findClient,
  editClient,
  deleteClient,
};

export default clientController;
