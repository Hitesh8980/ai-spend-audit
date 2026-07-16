import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Spinner,
  Text,
  VStack,
  Card,
  CardBody,
} from "@chakra-ui/react";

import api from "../services/api";

const ShareAudit = () => {
  const { id } = useParams();

  const [audit, setAudit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAudit();
  }, []);

  const fetchAudit = async () => {
    try {
      const res = await api.get(`/share/${id}`);
      setAudit(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" mt={20}>
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!audit) {
    return (
      <Box p={10}>
        <Heading size="md">Audit not found</Heading>
      </Box>
    );
  }

  return (
    <Box maxW="900px" mx="auto" py={10} px={6}>
      <Heading mb={6}>Shared Audit Report</Heading>

      <Card mb={6}>
        <CardBody>
          <Text>Monthly Savings: ${audit.monthly_savings}</Text>
          <Text>Annual Savings: ${audit.annual_savings}</Text>
        </CardBody>
      </Card>

      <Heading size="md" mb={4}>
        Recommendations
      </Heading>

      <VStack spacing={4} align="stretch">
        {audit.recommendations.map((item, index) => (
          <Card key={index}>
            <CardBody>
              <Heading size="sm">{item.tool}</Heading>

              <Text mt={2}>
                {item.currentPlan} → {item.recommendedPlan}
              </Text>

              <Text mt={2}>{item.reason}</Text>
            </CardBody>
          </Card>
        ))}
      </VStack>

      <Heading size="md" mt={8} mb={4}>
        AI Summary
      </Heading>

      <Card>
        <CardBody>
          <Text>{audit.summary}</Text>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ShareAudit;