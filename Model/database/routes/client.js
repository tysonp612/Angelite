const express = require("express");
const router = express.Router();
const servicesController = require("./../controllers/services");

router.route("/createService").post(servicesController.createService);
router.route("/getAllServices").get(servicesController.getAllServices);
router.route("/deleteService").post(servicesController.deleteService);
router.route("/editService").post(servicesController.editService);


