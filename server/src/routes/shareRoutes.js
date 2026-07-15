const express = require("express");
const { getAuditById } = require("../controllers/shareController");

const router = express.Router();

router.get("/:id", getAuditById);

module.exports = router;