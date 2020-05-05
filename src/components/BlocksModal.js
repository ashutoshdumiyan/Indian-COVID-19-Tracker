import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  useDisclosure,
  Text,
  Modal,
  Box,
  Flex,
  FormLabel,
  Switch,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  PseudoBox,
} from "@chakra-ui/core";

function BlocksModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [type, setType] = useState("linear");
  const changeType = () => {
    if (type === "linear") {
      setType("logarithmic");
    } else {
      setType("linear");
    }
  };
  const handleChecked = () => {
    if (type === "linear") {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <PseudoBox
        w="100%"
        h="70"
        boxShadow="lg"
        borderRadius="lg"
        p={[5, 5, 5, 5]}
        bg={props.bColor}
        onClick={onOpen}
        transition="0.4s"
        _hover={{
          cursor: "pointer",
          boxShadow: "xl",
          transform: "translateY(-8px)",
        }}
      >
        <Box fontSize="30px" color={props.tColor}>
          <strong>{props.total}</strong>
          {props.delta ? <Box fontSize="16px">[+ {props.delta}]</Box> : <br />}
          {/* <Box fontSize="16px">(+ {props.delta})</Box> */}
          {props.title}
        </Box>
      </PseudoBox>
      <Modal isOpen={isOpen} preserveScrollBarGap size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text textTransform="capitalize">{props.title}</Text>
            <Flex justify="center" align="center">
              <FormLabel htmlFor="logarithmic">Logarithmic</FormLabel>
              <Switch
                isChecked={handleChecked()}
                onChange={changeType}
                value={type}
                id="logarithmic"
              />
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow="auto">
            <Line
              data={{
                labels: props.dates[0],
                datasets: [
                  {
                    label: props.title,
                    data: props.dates[1],
                    borderColor: "#333fff",
                    fill: true,
                  },
                ],
              }}
              options={{
                scales: {
                  yAxes: [
                    {
                      type: type,
                    },
                  ],
                },
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Box border="1px solid #333" borderRadius="md" p={[2, 2, 2, 2]}>
              Tip: Hover over graph to see the values.
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BlocksModal;
