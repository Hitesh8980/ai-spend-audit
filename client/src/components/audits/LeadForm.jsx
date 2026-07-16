import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";

import api from "../../services/api";

const LeadForm = ({ auditId }) => {
  const toast = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await api.post("/leads", {
        auditId,
        email: form.email,
        company: form.company,
        role: form.role,
        teamSize: Number(form.teamSize),
      });

      toast({
        title: "Lead saved successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setForm({
        name: "",
        email: "",
        company: "",
      });
    } catch (err) {
      toast({
        title: err.response?.data?.message || "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mt={10} p={6} bg="white" borderRadius="lg" boxShadow="sm">
      <Heading size="md" mb={5}>
        Get Your Audit Report
      </Heading>

      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={form.name} onChange={handleChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={form.email} onChange={handleChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Company</FormLabel>
          <Input name="company" value={form.company} onChange={handleChange} />
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          onClick={handleSubmit}
          isLoading={loading}
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default LeadForm;
