const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

const requireAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }
  return res.redirect("/auth/admin");
};

router.get("/", requireAdmin, adminController.getDashboard);
router.post("/donors", requireAdmin, adminController.postCreateDonor);
router.get("/requests/new", requireAdmin, adminController.getCreateRequest);
router.post("/requests", requireAdmin, adminController.postCreateRequest);

module.exports = router;
