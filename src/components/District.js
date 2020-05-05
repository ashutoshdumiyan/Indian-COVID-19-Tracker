import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Button,
  Box,
  Spinner,
  Flex,
} from "@chakra-ui/core";

function District(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const renderDistricts = () => {
    let li = [];
    if (props.alldata[props.statename] === undefined) {
      return (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      );
    }
    const obj = props.alldata[props.statename].districtData;
    for (let key in obj) {
      let val = obj[key];
      if (val.notes) {
        li.push(
          <Flex
            direction="column"
            border="1px solid #333"
            borderRadius="md"
            margin="8px 0"
            padding="5px 3px"
            justify="space-between"
            key={key}
          >
            <Flex justify="space-between">
              <Box>
                <strong>Notes:</strong> {val.notes}
              </Box>
              {/* <Box fontWeight="500">{key}</Box> */}
            </Flex>
            <Flex fontWeight="500" justify="space-between">
              <Box textAlign="center">Confirmed:</Box>
              <Box textAlign="center">Active:</Box>
              <Box textAlign="center">Deaths:</Box>
            </Flex>
            <Flex justify="space-between">
              <Box textAlign="center">{val.confirmed}</Box>
              <Box textAlign="center">{val.active}</Box>
              <Box textAlign="center">{val.deceased}</Box>
            </Flex>
          </Flex>
        );
      } else {
        li.push(
          <Flex
            direction="column"
            border="1px solid #333"
            borderRadius="md"
            margin="8px 0"
            padding="5px 3px"
            justify="space-between"
            key={key}
          >
            <Flex fontWeight="500" justify="space-between">
              <Box textAlign="left">District:</Box>
              <Box textAlign="center">Confirmed:</Box>
              <Box textAlign="center">Active:</Box>
              <Box textAlign="center">Deaths:</Box>
            </Flex>
            <Flex justify="space-between">
              <Box maxWidth="min-content" textAlign="left">
                {key}
              </Box>
              <Box textAlign="center">{val.confirmed}</Box>
              <Box textAlign="center">{val.active}</Box>
              <Box textAlign="center">{val.deceased}</Box>
            </Flex>
          </Flex>
        );
      }
    }
    return li;
  };
  return (
    <>
      <Button
        onClick={onOpen}
        variant="outline"
        variantColor="teal"
        rightIcon="arrow-forward"
      >
        View District-Wise Data
      </Button>

      <Modal preserveScrollBarGap isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.statename}'s district data</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto">{renderDistricts()}</ModalBody>

          <ModalFooter>
            <Button
              variantColor="blue"
              mr={3}
              leftIcon="info-outline"
              onClick={() =>
                toast({
                  title: "Hello!",
                  isClosable: true,
                  description:
                    "Districts are in alphabetical order to help you find yours quickly.",
                  status: "info",
                  duration: 8000,
                })
              }
            >
              Info
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default District;
