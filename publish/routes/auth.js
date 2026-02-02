const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/admin", authController.renderAdminLogin);
router.post("/admin", authController.loginAdmin);
router.get("/donor", authController.renderDonorLogin);
router.post("/donor", authController.loginDonor);
router.post("/logout", authController.logout);

module.exports = router;
