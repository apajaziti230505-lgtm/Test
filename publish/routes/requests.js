const express = require("express");
const requestController = require("../controllers/requestController");
const notificationController = require("../controllers/notificationController");

const router = express.Router();

const requireLogin = (req, res, next) => {
  if (req.user) {
    return next();
  }
  return res.redirect("/auth/donor");
};

router.get("/", requireLogin, requestController.getRequests);
router.get("/notifications", requireLogin, notificationController.getNotifications);
router.get("/:id", requireLogin, requestController.getRequestDetail);
router.post("/:id/confirm", requireLogin, requestController.postConfirmDonation);

module.exports = router;
