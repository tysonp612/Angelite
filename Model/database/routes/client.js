const express = require("express");
const router = express.Router();

const clientController = require("../controllers/client");

router.route("/createClient").post(clientController.createClient);
router.route("/findClient").post(clientController.findClient);
router.route("/editClient").post(clientController.editClient);
router.route("/deleteClient").post(clientController.deleteClient);
