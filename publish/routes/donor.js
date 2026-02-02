const express = require("express");
const donorController = require("../controllers/donorController");

const router = express.Router();

router.get("/", donorController.getDashboard);
router.post("/availability", donorController.toggleAvailability);

module.exports = router;
