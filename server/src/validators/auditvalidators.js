const { body } = require("express-validator");

const auditValidator = [
  body("tools")
    .isArray({ min: 1 })
    .withMessage("Tools must be a non-empty array"),

  body("tools.*.name")
    .notEmpty()
    .withMessage("Tool name is required"),

  body("tools.*.plan")
    .notEmpty()
    .withMessage("Plan is required"),

  body("tools.*.seats")
    .isInt({ min: 1 })
    .withMessage("Seats must be a positive number"),
];

module.exports = auditValidator;