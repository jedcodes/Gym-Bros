import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const bodyParts = ["all", "back", "chest", "legs", "arms"];

const Categlory = () => {
  const renderBodyParts = bodyParts.map((bodyPart, idx) => {
    return (
      <Box bg="yellow.300" key={idx} w="100px" h="100px" borderRadius="lg">
        <Text fontSize="xl">{bodyPart}</Text>
      </Box>
    );
  });
  return <Flex justifyContent="space-between">{renderBodyParts}</Flex>;
};

export default Categlory;
