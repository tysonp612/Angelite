const { findById } = require("../schema/bookings");
const Bookings = require("../schema/bookings");

//options to populate(includes) when querying for bookings
const populateOptions = [
  { path: "client", select: "first_name last_name number" },
  { path: "services._id", model: "Services", select: "service price" },
];

//handle success response and error response

const handleSuccess = (res, message) => {
  res.status(200).json({ message });
};

const handleServerError = (res, err) => {
  res.status(500).json({ message: "Server error. Please try again" });
};

//create booking
exports.createBooking = async (req, res) => {
  try {
    const {
      client,
      date,
      timeOfBooking,
      duration,
      services,
      price,
      note,
    } = req.body.data;
    const servicesArr = services.map((s) => s._id);
    const booking = await new Bookings({
      client,
      date,
      duration,
      services,
      note,
      price,
      timeOfBooking,
      note,
    }).save();
    handleSuccess(res, "A reservation has been created successfully!");
  } catch (err) {
    handleServerError(res, err);
  }
};

//get all bookings of a day
exports.getAllBookings = async (req, res) => {
  try {
    const { date } = req.body;

    const bookings = await Bookings.find({ date }).populate(populateOptions);
    res.status(200).json(bookings);
  } catch (err) {
    handleServerError(res, err);
  }
};
exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.body;
    await findByIdAndDelete(id);
    handleSuccess(res, "Booking deleted successfully!");
  } catch (err) {
    handleServerError(res, err);
  }
};

exports.getOneBooking = async (req, res) => {
  try {
    const { id } = req.body;
    const booking = await findById(id).populate(populateOptions);
    res.status(200).json(bookings);
  } catch (err) {
    handleServerError(res, err);
  }
};

//edit a booking
//EDIT BOOKING NEEDES TO BE TESTED TO REMOVE UNNECESSARY DATA SENT
exports.editBooking = async (req, res) => {
  try {
    const {
      id,
      client,
      date,
      timeOfBooking,
      duration,
      services,
      price,
      note,
    } = req.body.data;
    const servicesArr = services.map((s) => s._id);

    await findByIdAndUpdate(
      id,
      {
        client,
        date,
        timeOfBooking,
        duration,
        services: { servicesArr },
        price,
        note,
      },
      { new: true }
    );

    handleSuccess(res, "Booking edited successfully!");
  } catch (err) {
    handleServerError(res, err);
  }
};

//get bookings of a client
exports.getClientBookings = async (req, res) => {
  try {
    const { clientId } = req.body;
    const allClientBookings = await Bookings.find(
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

    res.status(200).json(allClientBookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
