const recommendationRules = require("../utils/recommendationRules");

const generateAudit = (data) => {
  const recommendations = [];
  let monthlySavings = 0;

  if (!data || !Array.isArray(data.tools)) {
    return {
      monthlySavings: 0,
      annualSavings: 0,
      recommendations: [],
      message: "Invalid request. 'tools' must be an array.",
    };
  }

  data.tools.forEach((tool) => {
    const rule = recommendationRules.find(
      (item) => item.tool === tool.name
    );

    if (rule && rule.check(tool)) {
      const recommendation = rule.recommendation();

      recommendations.push({
        tool: tool.name,
        ...recommendation,
      });

      monthlySavings += recommendation.monthlySavings;
    }
  });

  return {
    monthlySavings,
    annualSavings: monthlySavings * 12,
    recommendations,
  };
};

module.exports = generateAudit;