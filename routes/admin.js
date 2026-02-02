const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.get("/", adminController.getDashboard);
router.get("/requests/new", adminController.getCreateRequest);
router.post("/requests", adminController.postCreateRequest);

module.exports = router;
