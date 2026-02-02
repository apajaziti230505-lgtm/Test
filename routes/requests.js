const express = require("express");
const requestController = require("../controllers/requestController");
const notificationController = require("../controllers/notificationController");

const router = express.Router();

router.get("/", requestController.getRequests);
router.get("/notifications", notificationController.getNotifications);
router.get("/:id", requestController.getRequestDetail);

module.exports = router;
