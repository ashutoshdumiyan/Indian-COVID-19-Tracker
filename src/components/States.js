import React, { Component } from "react";
import {
  Flex,
  Box,
  Button,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";

export class States extends Component {
  sortOn = (arr, key) => {
    arr.sort(function (a, b) {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
    return arr;
  };

  displayStates = () => {
    let statearray = this.props.statewise;
    let ar = [];
    statearray = this.sortOn(statearray, "state");
    statearray.forEach((element, index) => {
      const {
        state,
        active,
        confirmed,
        deltaconfirmed,
        deltadeaths,
        deltarecovered,
        deaths,
        recovered,
        statecode,
      } = element;
      ar.push(
        <AccordionItem key={index}>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              {state}
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            <Flex justify="space-around" p={[2, 2, 2, 2]}>
              <Box
                bg="purple.100"
                color="purple.600"
                borderRadius="md"
                marginRight="5px"
                flexGrow="1"
                flexBasis="0"
                p={[2, 2, 2, 2]}
              >
                Confirmed
                <br />
                {confirmed} {deltaconfirmed ? `[+${deltaconfirmed}]` : null}
              </Box>
              <Box
                bg="blue.100"
                color="blue.600"
                borderRadius="md"
                marginRight="5px"
                flexGrow="1"
                flexBasis="0"
                p={[2, 2, 2, 2]}
              >
                Active
                <br />
                {active}
              </Box>
              <Box
                bg="green.100"
                color="green.600"
                borderRadius="md"
                marginRight="5px"
                flexGrow="1"
                flexBasis="0"
                p={[2, 2, 2, 2]}
              >
                Recovered
                <br />
                {recovered} {deltarecovered ? `[+${deltarecovered}]` : null}
              </Box>
              <Box
                bg="red.100"
                color="red.600"
                borderRadius="md"
                marginRight="5px"
                flexGrow="1"
                flexBasis="0"
                p={[2, 2, 2, 2]}
              >
                Deaths
                <br />
                {deaths} {deltadeaths ? `[+${deltadeaths}]` : null}
              </Box>
            </Flex>
            <Flex justify="flex-end" p={[3, 3, 3, 3]}>
              <Button
                rightIcon="arrow-forward"
                variantColor="teal"
                variant="outline"
                onClick={() => {
                  this.props.changeCurrentState({
                    name: state,
                    code: statecode.toLowerCase(),
                  });
                  document.querySelector("#graphs").scrollIntoView();
                }}
              >
                View
              </Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      );
    });
    return ar;
  };

  render() {
    return (
      <Flex
        m={[5, 5, 5, 5]}
        overflow="auto"
        direction="column"
        align="start"
        justify="center"
      >
        <Accordion width="95%" defaultIndex={[]} allowMultiple="false">
          {this.displayStates()}
        </Accordion>
      </Flex>
    );
  }
}

export default States;
