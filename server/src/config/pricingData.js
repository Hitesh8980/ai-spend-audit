const pricingData = {

  Cursor: {
    source: "https://cursor.com/pricing",

    plans: {
      Hobby: 0,
      Pro: 20,
      Business: 40,
      Enterprise: 60,
    },
  },


  GitHubCopilot: {
    source: "https://github.com/features/copilot/plans",

    plans: {
      Individual: 10,
      Business: 19,
      Enterprise: 39,
    },
  },


  ChatGPT: {
    source: "https://openai.com/chatgpt/pricing",

    plans: {
      Plus: 20,
      Team: 30,
      Enterprise: 60,
    },
  },


  Claude: {
    source: "https://www.anthropic.com/pricing",

    plans: {
      Free: 0,
      Pro: 20,
      Max: 100,
      Team: 30,
      Enterprise: 60,
    },
  },


  Gemini:{
    source:"https://gemini.google.com",

    plans:{
      Pro:20,
      Ultra:250,
      API:0
    }
  },


  Windsurf:{
    source:"https://windsurf.com/pricing",

    plans:{
      Free:0,
      Pro:15,
      Teams:30
    }
  }

};


module.exports = pricingData;