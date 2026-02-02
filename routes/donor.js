const express = require("express");
const donorController = require("../controllers/donorController");

const router = express.Router();

const requireDonor = (req, res, next) => {
  if (req.user && req.user.role === "donor") {
    return next();
  }
  return res.redirect("/auth/donor");
};

router.get("/", requireDonor, donorController.getDashboard);
router.post("/availability", requireDonor, donorController.toggleAvailability);

module.exports = router;
