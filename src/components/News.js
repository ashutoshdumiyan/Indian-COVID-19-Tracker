import React, { useState, useEffect } from "react";
import {
  useDisclosure,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
import Axios from "axios";

function News() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { zones, setZones } = useState({ red: [], orange: [], green: [] });

  async function fetchMyAPI() {
    let response = await Axios.get("https://api.covid19india.org/zones.json");
    console.log(response.data);
    let r = [];
    let o = [];
    let g = [];
    response.data.zones.forEach((element, index) => {
      if (element.zone === "Red") {
        r.push(element);
      } else if (element.zone === "Orange") {
        o.push(element);
      } else {
        g.push(element);
      }
    });
    return { red: r, orange: o, green: g };
  }

  useEffect(() => {
    const obj = fetchMyAPI();
    setZones(obj);
  }, []);

  return (
    <Flex padding="0 5rem 2.5rem 5rem">
      <Box>
        <Button
          rightIcon="arrow-forward"
          variantColor="teal"
          variant="outline"
          marginRight="10px"
          onClick={() =>
            window.open(
              "https://news.google.com/topics/CAAqIggKIhxDQkFTRHdvSkwyMHZNREZqY0hsNUVnSmxiaWdBUAE?oc=3&ceid=IN:en"
            )
          }
        >
          See Latest COVID-19 News
        </Button>
        <Button
          rightIcon="arrow-forward"
          variantColor="teal"
          variant="outline"
          onClick={onOpen}
        >
          Zones
        </Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Zones</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Tabs variant="soft-rounded" variantColor="green">
                <TabList>
                  <Tab _selected={{ color: "red.500", bg: "red.100" }}>Red</Tab>
                  <Tab _selected={{ color: "orange.500", bg: "orange.100" }}>
                    Orange
                  </Tab>
                  <Tab _selected={{ color: "green.500", bg: "green.100" }}>
                    Green
                  </Tab>
                </TabList>
                <TabPanels marginTop="10px">
                  <TabPanel>
                    <p>red!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>orange!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>green!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}

export default News;
