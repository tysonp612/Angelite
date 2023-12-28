const Bookings = require("./../schema/bookings");

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
