import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  VStack,
  Button,
  Divider,
} from "@chakra-ui/react";

import { useLocation, Navigate } from "react-router-dom";

import RecommendationCard from "../components/audits/RecommendationCard";
import LeadForm from "../components/audits/LeadForm";
import ShareButton from "../components/audits/ShareButton";
import Navbar from "../components/layouts/Navbar";


const AuditResults = () => {

  const { state } = useLocation();


  if (!state) {
    return <Navigate to="/" />;
  }


  return (

    <Box bg="gray.50" minH="100vh">


      <Navbar />


      <Box
        maxW="1100px"
        mx="auto"
        px={6}
        py={10}
      >


        <Heading mb={8}>
          AI Spend Audit Report
        </Heading>



        {/* Hero Savings */}

        <SimpleGrid
          columns={{ base:1, md:2 }}
          gap={6}
          mb={10}
        >

          <Card>

            <CardBody>

              <Text color="gray.500">
                Monthly Savings
              </Text>


              <Heading
                mt={3}
                color="green.500"
              >
                ${state.monthly_savings}
              </Heading>


            </CardBody>

          </Card>




          <Card>

            <CardBody>

              <Text color="gray.500">
                Annual Savings
              </Text>


              <Heading
                mt={3}
                color="green.500"
              >
                ${state.annual_savings}
              </Heading>


            </CardBody>

          </Card>


        </SimpleGrid>





        {/* Techvruk CTA */}

        {
          state.monthly_savings > 500 && (

            <Card
              mb={10}
              bg="blue.50"
            >

              <CardBody>

                <Heading size="md">

                  You can save ${state.monthly_savings}/month

                </Heading>


                <Text mt={3}>

                  Techvruk can help you implement these
                  SaaS optimization recommendations and
                  capture your savings.

                </Text>



                <Button
                  mt={5}
                  colorPalette="blue"
                >

                  Talk to Techvruk

                </Button>


              </CardBody>


            </Card>

          )
        }






        {/* Already Optimized */}

        {
          state.monthly_savings < 100 && (

            <Card mb={10}>

              <CardBody>

                <Heading size="md">

                  You're spending well.

                </Heading>


                <Text mt={3}>

                  No immediate optimization opportunities
                  were found. Get notified when new
                  savings opportunities apply.

                </Text>


                <LeadForm auditId={state.id}/>


              </CardBody>

            </Card>

          )
        }






        <Heading size="lg" mb={5}>

          Recommendations

        </Heading>




        <VStack gap={5} align="stretch">


          {
            state.recommendations.map(
              (item,index)=>(

                <RecommendationCard
                  key={index}
                  recommendation={item}
                />

              )
            )
          }


        </VStack>





        <Divider my={10}/>





        <Heading size="lg" mb={5}>

          AI Summary

        </Heading>



        <Card>

          <CardBody>

            <Text whiteSpace="pre-line">

              {state.summary}

            </Text>


          </CardBody>


        </Card>





        <ShareButton
          auditId={state.id}
        />



      </Box>


    </Box>

  );

};


export default AuditResults;