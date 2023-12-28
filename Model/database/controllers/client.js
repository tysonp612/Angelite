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

exports.getAllFinshiedBookingsForClient = async (req, res) => {
  try {
    const { clientId } = req.body;
    const allClientFinishedBookings = await Bookings.find(
      { client: clientId, status: "Finished" },
      "-__v"
    )
      .populate("client", "first_name last_name number")
      .populate("services", "service")
      .populate("date", "date")
      .populate("price", "price")
      .populate("note", "note")
      .populate("timeOfBooking", "timeOfBooking")
      .sort({ date: -1 });

    res.status(200).json(allClientFinishedBookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
