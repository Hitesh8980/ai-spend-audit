const pricingData = require("../config/pricingData");

const recommendationRules = [
  {
    tool: "Cursor",
    check: (tool) =>
      tool.plan === "Business" && Number(tool.seats) === 1,

    recommendation: () => ({
      currentPlan: "Business",
      recommendedPlan: "Pro",
      monthlySavings:
        pricingData.Cursor.Business - pricingData.Cursor.Pro,
      reason:
        "Business plan is unnecessary for a single developer.",
    }),
  },

  {
    tool: "GitHubCopilot",
    check: (tool) =>
      tool.plan === "Business" && Number(tool.seats) === 1,

    recommendation: () => ({
      currentPlan: "Business",
      recommendedPlan: "Individual",
      monthlySavings:
        pricingData.GitHubCopilot.Business -
        pricingData.GitHubCopilot.Individual,
      reason:
        "Individual plan provides enough features for solo developers.",
    }),
  },
];

module.exports = recommendationRules;