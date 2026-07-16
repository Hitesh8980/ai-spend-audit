import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      mt={16}
      py={6}
      textAlign="center"
      borderTop="1px solid"
      borderColor="gray.200"
      bg="white"
    >
      <Text color="gray.600" fontSize="sm">
        © {new Date().getFullYear()} AI Spend Audit. Built with React, Express & Supabase.
      </Text>
    </Box>
  );
};

export default Footer;