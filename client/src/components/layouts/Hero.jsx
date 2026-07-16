import { Button, Heading, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <VStack spacing={6} py={16}>
      <Heading
        size="2xl"
        textAlign="center"
        color="gray.800"
      >
        Reduce Your AI Software Costs
      </Heading>

      <Text
        maxW="700px"
        textAlign="center"
        color="gray.600"
        fontSize="lg"
      >
        Analyze your AI subscriptions and receive intelligent recommendations to
        optimize your monthly software spending.
      </Text>

      <Button
        colorScheme="blue"
        size="lg"
        onClick={scrollToForm}
      >
        Start Free Audit
      </Button>
    </VStack>
  );
};

export default Hero;