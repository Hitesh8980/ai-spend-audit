const pricingData = require("../config/pricingData");
const recommendationsConfig = require("../utils/recommendationRules");


const generateAudit = (data) => {

  const recommendations = [];
  let monthlySavings = 0;


  data.tools.forEach((tool) => {


    const vendor = pricingData[tool.name];


    if (!vendor) {
      return;
    }


    const currentPrice =
      vendor.plans
        ? vendor.plans[tool.plan]
        : vendor[tool.plan];


    if (currentPrice === undefined) {
      return;
    }


    const seats = tool.seats || 1;


    // Current spending

    const currentSpend =
      currentPrice * seats;



    /*
      1. Plan optimization
    */


    const rule =
      recommendationsConfig[tool.name]?.[tool.plan];



    if (rule) {


      const recommendedPrice =
        vendor.plans
          ? vendor.plans[rule.recommendedPlan]
          : vendor[rule.recommendedPlan];



      if (recommendedPrice !== undefined) {


        const recommendedSpend =
          recommendedPrice * seats;



        const savings =
          currentSpend - recommendedSpend;



        if (savings > 0) {


          monthlySavings += savings;



          recommendations.push({

            tool: tool.name,


            currentPlan: tool.plan,


            recommendedPlan:
              rule.recommendedPlan,


            seats,


            currentMonthlySpend:
              currentSpend,


            recommendedMonthlySpend:
              recommendedSpend,


            monthlySavings:
              savings,


            annualSavings:
              savings * 12,


            reason:
              rule.reason,


            pricingSource:
              vendor.source || null

          });


        }

      }

    }




    /*
      2. Unused seat optimization

      Example:
      Purchased: 10 seats
      Active users: 6

      Remove 4 seats
    */


    if (tool.activeUsers) {


      const unusedSeats =
        seats - tool.activeUsers;



      if (unusedSeats > 0) {


        const seatSavings =
          unusedSeats * currentPrice;



        monthlySavings += seatSavings;



        recommendations.push({

          tool: tool.name,


          currentPlan:
            tool.plan,


          action:
            "Remove unused licenses",


          purchasedSeats:
            seats,


          activeUsers:
            tool.activeUsers,


          unusedSeats,


          monthlySavings:
            seatSavings,


          annualSavings:
            seatSavings * 12,


          reason:
            `${unusedSeats} purchased licenses are not actively used. Removing unused seats reduces unnecessary subscription cost.`


        });


      }

    }


  });



  let auditStatus = "optimized";


  if (monthlySavings > 500) {

    auditStatus = "high_savings";

  } 
  else if (monthlySavings >= 100) {

    auditStatus = "moderate_savings";

  }



  return {


    auditStatus,


    monthlySavings,


    annualSavings:
      monthlySavings * 12,


    recommendations


  };


};



module.exports = generateAudit;