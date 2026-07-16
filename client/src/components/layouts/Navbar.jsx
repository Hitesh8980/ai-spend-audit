import { Box, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        py={4}
        align="center"
        justify="space-between"
      >
        <Heading size="md" color="brand.600">
          AI Spend Audit
        </Heading>
      </Flex>
    </Box>
  );
};

export default Navbar;