const express = require("express");
const router = express.Router();
const controller = require("../controller/index");
router.get("/", controller.vendor_details.getAll);
router.get("/:name", controller.vendor_details.getUsername);
router.post("/", controller.vendor_details.createNew);
router.put("/", controller.vendor_details.editAt);
router.delete("/", controller.vendor_details.deleteUser);
module.exports = router;