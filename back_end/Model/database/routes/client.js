import express from "express";
import clientController from "../controllers/client.js";

const router = express.Router();

router.route("/createClient").post(clientController.createClient);
router.route("/findClient").post(clientController.findClient);
router.route("/editClient").post(clientController.editClient);
router.route("/deleteClient").post(clientController.deleteClient);

export default router;
