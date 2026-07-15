const express = require("express");

const { createAudit } = require("../controllers/auditControllers");

const router = express.Router();

router.post("/", createAudit);

module.exports = router;