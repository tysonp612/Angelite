import Bookings from "./../schema/bookings.js";

// Options to populate (includes) when querying for bookings
const populateOptions = [
  { path: "client", select: "first_name last_name number" },
  { path: "services._id", model: "Services", select: "service price" },
];

// Handle success response and error response
const handleSuccess = (res, message) => {
  res.status(200).json({ message });
};

const handleServerError = (res, err) => {
  res.status(500).json({ message: "Server error. Please try again" });
};

// Create booking
export const createBooking = async (req, res) => {
  try {
    const {
      client,
      date,
      timeOfBooking,
      duration,
      services,
      price,
      note,
    } = req.body.bookingData;

    const servicesArr = services.map((s) => s._id);
    await new Bookings({
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

// Get all bookings of a day
export const getAllBookings = async (req, res) => {
  try {
    const { date } = req.body;
    const bookings = await Bookings.find({ date }).populate(populateOptions);
    res.status(200).json(bookings);
  } catch (err) {
    handleServerError(res, err);
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.body;
    await findByIdAndDelete(bookingId);
    handleSuccess(res, "Booking deleted successfully!");
  } catch (err) {
    handleServerError(res, err);
  }
};

export const getOneBooking = async (req, res) => {
  try {
    const { bookingId } = req.body;
    const booking = await findById(bookingId).populate(populateOptions);
    res.status(200).json(booking);
  } catch (err) {
    handleServerError(res, err);
  }
};

// Edit a booking
// EDIT BOOKING NEEDS TO BE TESTED TO REMOVE UNNECESSARY DATA SENT
export const editBooking = async (req, res) => {
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
    } = req.body.bookingData;

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

// Get bookings of a client
export const getClientBookings = async (req, res) => {
  try {
    const { clientId } = req.body;
    const allClientBookings = await Bookings.find({ client: clientId }, "-__v")
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

// Export the default controller
const bookingsController = {
  createBooking,
  getAllBookings,
  deleteBooking,
  getOneBooking,
  editBooking,
  getClientBookings,
};

export default bookingsController;
