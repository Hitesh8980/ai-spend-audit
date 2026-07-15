const generateAudit = require("../services/auditEngine");
const supabase = require("../config/supabase");

const createAudit = async (req, res) => {
  try {
    const audit = generateAudit(req.body);

    const { data, error } = await supabase
      .from("audits")
      .insert([
        {
          tools: req.body.tools,
          monthly_savings: audit.monthlySavings,
          annual_savings: audit.annualSavings,
          recommendations: audit.recommendations,
        },
      ])
      .select();

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    res.status(201).json({
      success: true,
      data: data[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createAudit,
};