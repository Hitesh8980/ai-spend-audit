import {
  Card,
  CardBody,
  Heading,
  Text,
  Badge,
  VStack,
  HStack,
  Divider,
  Box,
} from "@chakra-ui/react";


const RecommendationCard = ({ recommendation }) => {

  return (

    <Card
      bg="white"
      boxShadow="sm"
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.200"
    >

      <CardBody>

        <VStack align="start" spacing={4} width="100%">


          {/* Tool Name */}

          <HStack justify="space-between" width="100%">

            <Heading size="md">
              {recommendation.tool}
            </Heading>


            <Badge colorPalette="green">
              Save ${recommendation.monthlySavings}/month
            </Badge>

          </HStack>



          <Divider />



          {/* Current vs Recommended */}


          <Box>

            <Text fontWeight="bold">
              Current Plan
            </Text>

            <Text color="gray.600">
              {recommendation.currentPlan}
            </Text>

          </Box>



          <Box>

            <Text fontWeight="bold">
              Recommended Plan
            </Text>

            <Text color="blue.600">
              {recommendation.recommendedPlan}
            </Text>

          </Box>



          <Divider />



          {/* Cost Breakdown */}


          <HStack
            width="100%"
            justify="space-between"
          >

            <Box>

              <Text fontSize="sm" color="gray.500">
                Current Spend
              </Text>

              <Text fontWeight="bold">
                ${recommendation.currentMonthlySpend}/month
              </Text>

            </Box>



            <Box>

              <Text fontSize="sm" color="gray.500">
                New Spend
              </Text>

              <Text fontWeight="bold">
                ${recommendation.recommendedMonthlySpend}/month
              </Text>

            </Box>


          </HStack>




          <Box
            bg="green.50"
            p={3}
            borderRadius="md"
            width="100%"
          >

            <Text fontWeight="bold" color="green.600">

              Annual Savings:
              ${recommendation.annualSavings}

            </Text>

          </Box>




          {/* Reason */}

          <Box>

            <Text fontWeight="bold">
              Why this recommendation?
            </Text>


            <Text color="gray.600">

              {recommendation.reason}

            </Text>

          </Box>



          {
            recommendation.pricingSource && (

              <Text
                fontSize="sm"
                color="gray.500"
              >

                Pricing source:
                {" "}
                {recommendation.pricingSource}

              </Text>

            )
          }



        </VStack>


      </CardBody>


    </Card>

  );

};


export default RecommendationCard;