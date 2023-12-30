import express from "express";
import servicesController from "../controllers/services.js";

const router = express.Router();

router.route("/createService").post(servicesController.createService);
router.route("/getAllServices").get(servicesController.getAllServices);
router.route("/deleteService").post(servicesController.deleteService);
router.route("/editService").post(servicesController.editService);
router.route("/findService").post(servicesController.findService);

export default router;
