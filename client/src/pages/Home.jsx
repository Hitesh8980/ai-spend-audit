import { Box } from "@chakra-ui/react";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/layouts/Hero";
import ToolForm from "../components/audits/ToolForm";

const Home = () => {
  return (
    <>
      <Navbar />

      <Box maxW="1200px" mx="auto" px={6}>
        <Hero />

        <Box
          id="audit-form"
          minH="400px"
        >
              <ToolForm />
        </Box>
      </Box>
    </>
  );
};

export default Home;