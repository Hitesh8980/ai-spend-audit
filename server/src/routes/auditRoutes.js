const express = require("express");

const { createAudit } = require("../controllers/auditControllers");
const auditValidator = require("../validators/auditvalidators");

const router = express.Router();

router.post("/", auditValidator, createAudit);

module.exports = router;