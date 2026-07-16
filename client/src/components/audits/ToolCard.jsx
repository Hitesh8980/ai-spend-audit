import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";

import pricingData from "../../data/pricingData";

const ToolCard = ({
  tool,
  index,
  handleChange,
  removeTool,
  totalTools,
}) => {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
    >
      <Flex justify="space-between" align="center" mb={5}>
        <Heading size="sm">Tool {index + 1}</Heading>

        {totalTools > 1 && (
          <Button
            colorScheme="red"
            variant="outline"
            size="sm"
            onClick={() => removeTool(index)}
          >
            Remove
          </Button>
        )}
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        {/* Tool */}

        <FormControl>
          <FormLabel>Tool</FormLabel>

          <Select
            value={tool.name}
            onChange={(e) =>
              handleChange(index, "name", e.target.value)
            }
          >
            <option value="Cursor">Cursor</option>
            <option value="GitHubCopilot">GitHub Copilot</option>
            <option value="ChatGPT">ChatGPT</option>
            <option value="Claude">Claude</option>
            <option value="Gemini">Gemini</option>
            <option value="Windsurf">Windsurf</option>
          </Select>
        </FormControl>

        {/* Plan */}

        <FormControl>
          <FormLabel>Plan</FormLabel>

          <Select
            value={tool.plan}
            onChange={(e) =>
              handleChange(index, "plan", e.target.value)
            }
          >
            {pricingData[tool.name]?.map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </Select>
        </FormControl>

        {/* Seats */}

        <FormControl>
          <FormLabel>Seats</FormLabel>

          <Input
            type="number"
            min={1}
            value={tool.seats}
            onChange={(e) =>
              handleChange(
                index,
                "seats",
                Number(e.target.value)
              )
            }
          />
        </FormControl>
      </SimpleGrid>
    </Box>
  );
};

export default ToolCard;