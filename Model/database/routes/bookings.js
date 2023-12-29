const express = require("express");
const router = express.Router();

const bookingsController = require("../controllers/bookings");

router.route("/createBooking").post(bookingsController.createBooking);
router.route("/getAllBookings").get(bookingsController.getAllBookings);
router.route("/getOneBooking").get(bookingsController.getOneBooking);
router.route("/editBooking").post(bookingsController.editBooking);
router.route("/getClientBookings").post(bookingsController.getClientBookings);
