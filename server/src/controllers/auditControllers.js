const generateAudit = require("../services/auditEngine");
const supabase = require("../config/supabase");
const generateSummary = require("../services/aiSummaryServices");
const { validationResult } = require("express-validator");


const createAudit = async (req, res, next) => {
  try {

    // Validate request first
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }


    const audit = generateAudit(req.body);

    const summary = await generateSummary(audit);


    const { data, error } = await supabase
      .from("audits")
      .insert([
        {
          tools: req.body.tools,
          monthly_savings: audit.monthlySavings,
          annual_savings: audit.annualSavings,
          recommendations: audit.recommendations,
          summary,
        },
      ])
      .select();


    if (error) {
      throw error;
    }


    res.status(201).json({
      success: true,
      data: {
        ...data[0],
      },
    });


  } catch (error) {

    next(error);

  }
};


module.exports = {
  createAudit,
};