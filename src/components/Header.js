import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Link,
  Icon,
  Tabs,
  TabList,
  List,
  ListItem,
  TabPanels,
  Tab,
  TabPanel,
  PseudoBox,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.400"
      color="white"
      position="sticky"
      top="0"
      zIndex="2"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          COVID-19 Tracker
        </Heading>
      </Flex>

      <PseudoBox
        display={{ sm: "block", md: "none" }}
        border="1px solid white"
        padding="5px"
        borderRadius="md"
        _hover={{ bg: "teal.500" }}
        onClick={handleToggle}
      >
        <svg
          fill="white"
          width="15px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </PseudoBox>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>For India</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          leftIcon="info"
          onClick={onOpen}
          variantColor="teal.500"
          border="1px"
        >
          Public Info
        </Button>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody paddingBottom="25px" overflow="auto">
              <Tabs variant="soft-rounded" variantColor="green">
                <TabList
                  position="sticky"
                  padding="3px"
                  top="-8px"
                  zIndex="2"
                  background="white"
                >
                  <Tab>Overview</Tab>
                  <Tab>Symptoms</Tab>
                  <Tab>Prevention</Tab>
                  <Tab>Treatment</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Box marginTop="15px" fontFamily="calibri">
                      <Text>
                        COVID-19 is the infectious disease caused by the most
                        recently discovered coronavirus. This new virus and
                        disease were unknown before the outbreak began in Wuhan,
                        China, in December 2019. COVID-19 is now a pandemic
                        affecting many countries globally.
                      </Text>
                      <Text>
                        Most people who fall sick with COVID-19 will experience
                        mild to moderate symptoms and recover without special
                        treatment.
                      </Text>
                      <br />
                      <Text
                        fontWeight="500"
                        letterSpacing="2px"
                        textTransform="uppercase"
                      >
                        How it spreads
                      </Text>
                      <br />
                      <Text>
                        The virus that causes COVID-19 is mainly transmitted
                        through droplets generated when an infected person
                        coughs, sneezes, or exhales. These droplets are too
                        heavy to hang in the air, and quickly fall on floors or
                        surfaces.
                      </Text>
                      <Text>
                        You can be infected by breathing in the virus if you are
                        within close proximity of someone who has COVID-19, or
                        by touching a contaminated surface and then your eyes,
                        nose or mouth.
                      </Text>
                      <br />
                      <Text>
                        Source:&nbsp;&nbsp;
                        <Link
                          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                          isExternal
                        >
                          WHO <Icon name="external-link" mx="2px" />
                        </Link>{" "}
                      </Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box marginTop="15px">
                      <Text>Mild Symptoms:</Text>
                      <List styleType="disc">
                        <ListItem>Fever</ListItem>
                        <ListItem>Tiredness</ListItem>
                        <ListItem>Dry cough</ListItem>
                      </List>
                      <br />
                      <Text>Serious Symptoms:</Text>
                      <List styleType="disc">
                        <ListItem>Aches and pains</ListItem>
                        <ListItem>Loss of speech or movement</ListItem>
                        <ListItem>Difficulty in breathing</ListItem>
                        <ListItem>Chest pain or pressure</ListItem>
                      </List>
                      <br />
                      <Text>
                        Symptoms are usually mild and begin gradually. Some
                        people can be infected but only have very mild symptoms.
                        Most people (about 80%) recover from the disease without
                        needing hospital treatment. Around 1 out of every 5
                        people who gets COVID-19 becomes seriously ill and
                        develops difficulty breathing. Older people, and those
                        with underlying medical problems like high blood
                        pressure, heart and lung problems, diabetes, or cancer ,
                        are at higher risk of developing serious illness.
                        However anyone can catch COVID-19 and become seriously
                        ill. Even people with very mild symptoms of COVID-19 can
                        transmit the virus.
                      </Text>
                      <br />
                      <Text>
                        <Link
                          href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
                          isExternal
                        >
                          Learn more on WHO{" "}
                          <Icon name="external-link" mx="2px" />
                        </Link>{" "}
                      </Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>four!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};

export default Header;
