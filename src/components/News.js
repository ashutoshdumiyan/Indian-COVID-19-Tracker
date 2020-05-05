import React from "react";
import {
  useDisclosure,
  useToast,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Icon,
  Input,
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

function News(props) {
  const [redFilter, setRedFilter] = React.useState("");
  const [orangeFilter, setOrangeFilter] = React.useState("");
  const [greenFilter, setGreenFilter] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const mounted = React.useRef();
  React.useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // do componentDidUpate logic
      const ri = document.querySelector("#redInput");
      const oi = document.querySelector("#orangeInput");
      const gi = document.querySelector("#greenInput");
      if (ri) ri.value = redFilter;
      if (oi) oi.value = orangeFilter;
      if (gi) gi.value = greenFilter;
    }
  });

  const renderRedZones = () => {
    let li = [];
    const { red } = props.zones;
    // console.log(redFilter);
    if (redFilter === "") {
      red.forEach((element, index) => {
        li.push(
          <Flex
            direction="column"
            border="1px solid #333"
            borderRadius="md"
            margin="8px 0"
            padding="5px 3px"
            justify="space-between"
            key={index}
          >
            <Flex fontWeight="500" justify="space-between">
              <Box textAlign="left">District:</Box>
              <Box textAlign="center">State:</Box>
              <Box textAlign="center">Updated on:</Box>
            </Flex>
            <Flex justify="space-between">
              <Box textAlign="left">{element.district}</Box>
              <Box textAlign="center">{element.state}</Box>
              <Box textAlign="center">{element.lastupdated}</Box>
            </Flex>
          </Flex>
        );
      });
    } else {
      red.forEach((element, index) => {
        // console.log(redFilter);
        if (element.district.toLowerCase().includes(redFilter.toLowerCase())) {
          li.push(
            <Flex
              direction="column"
              border="1px solid #333"
              borderRadius="md"
              margin="8px 0"
              padding="5px 3px"
              justify="space-between"
              key={index}
            >
              <Flex fontWeight="500" justify="space-between">
                <Box textAlign="left">District:</Box>
                <Box textAlign="center">State:</Box>
                <Box textAlign="center">Updated on:</Box>
              </Flex>
              <Flex justify="space-between">
                <Box textAlign="left">{element.district}</Box>
                <Box textAlign="center">{element.state}</Box>
                <Box textAlign="center">{element.lastupdated}</Box>
              </Flex>
            </Flex>
          );
        }
      });
    }
    if (li.length === 0) {
      li.push(
        <Text key="0" margin="10px">
          <Icon name="check" /> You are safe. Or search by district name.
        </Text>
      );
    }
    return li;
  };

  const renderOrangeZones = () => {
    let li = [];
    const { orange } = props.zones;
    // console.log(orangeFilter);
    if (orangeFilter === "") {
      orange.forEach((element, index) => {
        li.push(
          <Flex
            direction="column"
            border="1px solid #333"
            borderRadius="md"
            margin="8px 0"
            padding="5px 3px"
            justify="space-between"
            key={index}
          >
            <Flex fontWeight="500" justify="space-between">
              <Box textAlign="left">District:</Box>
              <Box textAlign="center">State:</Box>
              <Box textAlign="center">Updated on:</Box>
            </Flex>
            <Flex justify="space-between">
              <Box textAlign="left">{element.district}</Box>
              <Box textAlign="center">{element.state}</Box>
              <Box textAlign="center">{element.lastupdated}</Box>
            </Flex>
          </Flex>
        );
      });
    } else {
      orange.forEach((element, index) => {
        // console.log(element.district.toLowerCase());
        if (
          element.district.toLowerCase().includes(orangeFilter.toLowerCase())
        ) {
          li.push(
            <Flex
              direction="column"
              border="1px solid #333"
              borderRadius="md"
              margin="8px 0"
              padding="5px 3px"
              justify="space-between"
              key={index}
            >
              <Flex fontWeight="500" justify="space-between">
                <Box textAlign="left">District:</Box>
                <Box textAlign="center">State:</Box>
                <Box textAlign="center">Updated on:</Box>
              </Flex>
              <Flex justify="space-between">
                <Box textAlign="left">{element.district}</Box>
                <Box textAlign="center">{element.state}</Box>
                <Box textAlign="center">{element.lastupdated}</Box>
              </Flex>
            </Flex>
          );
        }
      });
    }
    if (li.length === 0) {
      li.push(
        <Text key="0" margin="10px">
          <Icon name="check" /> You are safe. Or search by district name.
        </Text>
      );
    }
    return li;
  };

  const renderGreenZones = () => {
    let li = [];
    const { green } = props.zones;
    // console.log(greenFilter);
    if (greenFilter === "") {
      green.forEach((element, index) => {
        li.push(
          <Flex
            direction="column"
            border="1px solid #333"
            borderRadius="md"
            margin="8px 0"
            padding="5px 3px"
            justify="space-between"
            key={index}
          >
            <Flex fontWeight="500" justify="space-between">
              <Box textAlign="left">District:</Box>
              <Box textAlign="center">State:</Box>
              <Box textAlign="center">Updated on:</Box>
            </Flex>
            <Flex justify="space-between">
              <Box textAlign="left">{element.district}</Box>
              <Box textAlign="center">{element.state}</Box>
              <Box textAlign="center">{element.lastupdated}</Box>
            </Flex>
          </Flex>
        );
      });
    } else {
      green.forEach((element, index) => {
        // console.log(element.district.toLowerCase());
        if (
          element.district.toLowerCase().includes(greenFilter.toLowerCase())
        ) {
          li.push(
            <Flex
              direction="column"
              border="1px solid #333"
              borderRadius="md"
              margin="8px 0"
              padding="5px 3px"
              justify="space-between"
              key={index}
            >
              <Flex fontWeight="500" justify="space-between">
                <Box textAlign="left">District:</Box>
                <Box textAlign="center">State:</Box>
                <Box textAlign="center">Updated on:</Box>
              </Flex>
              <Flex justify="space-between">
                <Box textAlign="left">{element.district}</Box>
                <Box textAlign="center">{element.state}</Box>
                <Box textAlign="center">{element.lastupdated}</Box>
              </Flex>
            </Flex>
          );
        }
      });
    }
    if (li.length === 0) {
      li.push(
        <Text key="0" margin="10px">
          <Icon name="check" /> You are safe. Or search by district name.
        </Text>
      );
    }
    return li;
  };

  const handleRedChange = () => {
    const val = document.querySelector("#redInput").value;
    setRedFilter(val);
  };

  const handleOrangeChange = () => {
    const val = document.querySelector("#orangeInput").value;
    setOrangeFilter(val);
  };

  const handleGreenChange = () => {
    const val = document.querySelector("#greenInput").value;
    setGreenFilter(val);
  };

  const handleRedEmptyChange = (e) => {
    if (e.target.value === "") {
      setRedFilter("");
    }
  };

  const handleOrangeEmptyChange = (e) => {
    if (e.target.value === "") {
      setOrangeFilter("");
    }
  };

  const handleGreenEmptyChange = (e) => {
    if (e.target.value === "") {
      setGreenFilter("");
    }
  };

  return (
    <Flex padding="0 5rem 2.5rem 5rem" id="news">
      <Box>
        <Button
          rightIcon="external-link"
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
          id="zonesButton"
        >
          See District-Wise Zones
        </Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Zones</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflow="auto">
              <Tabs variant="soft-rounded" variantColor="green">
                <TabList
                  position="sticky"
                  padding="3px"
                  top="-8px"
                  zIndex="2"
                  background="white"
                >
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
                    <Flex>
                      <Input
                        marginRight="10px"
                        placeholder="Search your city in red zones..."
                        defaultValue={redFilter ? redFilter : null}
                        id="redInput"
                        onChange={handleRedEmptyChange}
                      />
                      <Button
                        rightIcon="search"
                        variantColor="teal"
                        variant="outline"
                        onClick={handleRedChange}
                      >
                        Search
                      </Button>
                    </Flex>
                    {renderRedZones()}
                  </TabPanel>
                  <TabPanel>
                    <Flex>
                      <Input
                        marginRight="10px"
                        placeholder="Search your city in orange zones..."
                        defaultValue={orangeFilter ? orangeFilter : null}
                        id="orangeInput"
                        onChange={handleOrangeEmptyChange}
                      />
                      <Button
                        rightIcon="search"
                        variantColor="teal"
                        variant="outline"
                        onClick={handleOrangeChange}
                      >
                        Search
                      </Button>
                    </Flex>
                    {renderOrangeZones()}
                  </TabPanel>
                  <TabPanel>
                    <Flex>
                      <Input
                        marginRight="10px"
                        placeholder="Search your city in green zones..."
                        defaultValue={greenFilter ? greenFilter : null}
                        id="greenInput"
                        onChange={handleGreenEmptyChange}
                      />
                      <Button
                        rightIcon="search"
                        variantColor="teal"
                        variant="outline"
                        onClick={handleGreenChange}
                      >
                        Search
                      </Button>
                    </Flex>
                    {renderGreenZones()}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>

            <ModalFooter>
              <Box border="1px solid #333" borderRadius="md" p={[2, 2, 2, 2]}>
                <Button
                  variantColor="blue"
                  rightIcon="info-outline"
                  onClick={() =>
                    toast({
                      title: "Attention!",
                      isClosable: true,
                      description:
                        "You can only search districts.\nUnion territories such as Delhi, Chandigarh etc.\nare treated as states.",
                      status: "info",
                      duration: 8000,
                    })
                  }
                >
                  Help
                </Button>
                &nbsp;&nbsp; Info: You can search your district in each zone.
              </Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}

export default News;
