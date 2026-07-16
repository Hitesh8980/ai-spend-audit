import { useState } from "react";
import {
  Button,
  Heading,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import ToolCard from "./ToolCard";
import api from "../../services/api";
import pricingData from "../../data/pricingData";

const ToolForm = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const [tools, setTools] = useState([
    {
      name: "Cursor",
      plan: "Hobby",
      seats: 1,
    },
  ]);

  const handleChange = (index, field, value) => {
    const updatedTools = [...tools];

    updatedTools[index][field] = value;

    // Automatically reset the plan when the tool changes
    if (field === "name") {
      updatedTools[index].plan = pricingData[value][0];
    }

    setTools(updatedTools);
  };

  const addTool = () => {
    setTools([
      ...tools,
      {
        name: "Cursor",
        plan: "Hobby",
        seats: 1,
      },
    ]);
  };

  const removeTool = (index) => {
    const updatedTools = tools.filter((_, i) => i !== index);
    setTools(updatedTools);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await api.post("/audit", {
        tools,
      });

      toast({
        title: "Audit Generated",
        description: "Your AI spend audit was generated successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/result", {
        state: response.data.data,
      });
    } catch (error) {
      console.error(error);

      toast({
        title: "Failed to Generate Audit",
        description:
          error.response?.data?.message ||
          "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg">
        Audit Your AI Stack
      </Heading>

      {tools.map((tool, index) => (
        <ToolCard
          key={index}
          tool={tool}
          index={index}
          handleChange={handleChange}
          removeTool={removeTool}
          totalTools={tools.length}
        />
      ))}

      <Button
        alignSelf="flex-start"
        colorScheme="blue"
        variant="outline"
        onClick={addTool}
      >
        + Add Another Tool
      </Button>

      <Button
        colorScheme="blue"
        size="lg"
        width="100%"
        onClick={handleSubmit}
        isLoading={loading}
        loadingText="Generating Audit..."
      >
        Generate Audit
      </Button>
    </VStack>
  );
};

export default ToolForm;