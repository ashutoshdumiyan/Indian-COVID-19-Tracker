import React, { Component } from "react";
import { Box, Text, Grid } from "@chakra-ui/core";

class Blocks extends Component {
  render() {
    const {
      totalActive,
      totalConfirmed,
      totalDeaths,
      totalRecovered,
    } = this.props.total;
    const { deltaConfirmed, deltaDeaths, deltaRecovered } = this.props.delta;
    return (
      <Grid
        p={[20, 20, 20, 20]}
        templateColumns="repeat(auto-fit, minmax(200px,1fr))"
        gap={6}
      >
        <Box
          w="100%"
          h="70"
          borderRadius="lg"
          boxShadow="lg"
          bg="purple.100"
          p={[5, 5, 5, 5]}
        >
          <Box fontSize="30px" color="purple.500">
            <strong>{totalConfirmed}</strong>
            <Text fontSize="16px">
              (+
              {deltaConfirmed})
            </Text>
            confirmed cases.
          </Box>
        </Box>
        <Box
          w="100%"
          h="70"
          boxShadow="lg"
          borderRadius="lg"
          bg="blue.100"
          p={[5, 5, 5, 5]}
        >
          <Text fontSize="30px" color="blue.500">
            <strong>{totalActive}</strong>
            <br />
            active cases.
          </Text>
        </Box>
        <Box
          w="100%"
          h="70"
          p={[5, 5, 5, 5]}
          boxShadow="lg"
          borderRadius="lg"
          bg="green.100"
        >
          <Text fontSize="30px" color="green.500">
            <strong>{totalRecovered}</strong>
            <Box fontSize="16px">
              (+
              {deltaRecovered})
            </Box>
            recoveries.
          </Text>
        </Box>
        <Box
          w="100%"
          h="70"
          boxShadow="lg"
          borderRadius="lg"
          p={[5, 5, 5, 5]}
          bg="red.100"
        >
          <Box fontSize="30px" color="red.500">
            <strong>{totalDeaths}</strong>
            <Text fontSize="16px">
              (+
              {deltaDeaths})
            </Text>
            deaths.
          </Box>
        </Box>
      </Grid>
    );
  }
}

export default Blocks;
