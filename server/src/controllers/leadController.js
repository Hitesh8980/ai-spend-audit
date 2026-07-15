const supabase = require("../config/supabase");

const createLead = async (req, res) => {
  try {
    const { auditId, email, company, role, teamSize } = req.body;

    if (!auditId || !email) {
      return res.status(400).json({
        success: false,
        message: "auditId and email are required",
      });
    }

    const { error } = await supabase.from("leads").insert([
      {
        audit_id: auditId,
        email,
        company,
        role,
        team_size: teamSize,
      },
    ]);

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(201).json({
      success: true,
      message: "Lead saved successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createLead,
};