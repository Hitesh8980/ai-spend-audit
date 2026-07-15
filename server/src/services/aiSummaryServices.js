const axios = require("axios");

const generateSummary = async (audit) => {
  const recommendations = audit.recommendations || [];

  const prompt = `
You are an AI SaaS Cost Optimization Consultant.

Audit Details:

Monthly Savings: $${audit.monthlySavings}
Annual Savings: $${audit.annualSavings}

Recommendations:
${recommendations
  .map(
    (item) =>
      `- ${item.tool}: Switch from ${item.currentPlan} to ${item.recommendedPlan} and save $${item.monthlySavings}/month`
  )
  .join("\n")}

Write a concise professional summary (maximum 120 words).
`;

  const models = [
    "google/gemma-3-27b-it",
    "mistralai/mistral-7b-instruct:free",
  ];

  for (const model of models) {
    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
          timeout: 30000,
        }
      );

      return response.data.choices[0].message.content;

    } catch (error) {

      if (error.response?.status === 429) {
        console.log(`${model} rate limited. Trying next model...`);
        continue;
      }

      console.error(
        "OpenRouter Error:",
        error.response?.data || error.message
      );

      break;
    }
  }

  return "AI summary is temporarily unavailable. Audit completed successfully.";
};

module.exports = generateSummary;