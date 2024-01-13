import express from "express";
import bookingsController from "../controllers/bookings.js";

const router = express.Router();

router.route("/createBooking").post(bookingsController.createBooking);
router.route("/getAllBookings").get(bookingsController.getAllBookings);
router.route("/getOneBooking").get(bookingsController.getOneBooking);
router.route("/editBooking").post(bookingsController.editBooking);
router.route("/getClientBookings").post(bookingsController.getClientBookings);
router.route("/deleteBooking").post(bookingsController.deleteBooking);

export default router;
