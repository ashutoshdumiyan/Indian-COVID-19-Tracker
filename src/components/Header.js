import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
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
  Divider,
} from "@chakra-ui/core";
import { Android, IOS, YouTube } from "../Icons";

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
          variantColor="teal"
          border="1px"
        >
          Public Info
        </Button>

        <Modal preserveScrollBarGap isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>General information about COVID-19</ModalHeader>
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
                  <Tab>Important Contacts</Tab>
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
                      <Divider />
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
                      <Divider />
                      <Flex>
                        <Text margin="5px">
                          <Link
                            href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
                            isExternal
                          >
                            Learn more on WHO{" "}
                            <Icon name="external-link" mx="2px" />
                          </Link>{" "}
                        </Text>
                        <br />
                        <Text margin="5px">
                          <Link
                            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters"
                            isExternal
                          >
                            WHO myth busters{" "}
                            <Icon name="external-link" mx="2px" />
                          </Link>{" "}
                        </Text>
                      </Flex>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box marginTop="15px">
                      <Text>To prevent the spread of COVID-19:</Text>
                      <List styleType="disc">
                        <ListItem>
                          Clean your hands often. Use soap and water, or an
                          alcohol-based hand rub.
                        </ListItem>
                        <ListItem>
                          Maintain a safe distance from anyone who is coughing
                          or sneezing.
                        </ListItem>
                        <ListItem>
                          Don’t touch your eyes, nose or mouth.
                        </ListItem>
                        <ListItem>Stay home if you feel unwell.</ListItem>
                        <ListItem>
                          If you have a fever, a cough, and difficulty
                          breathing, seek medical attention. Call in advance.
                        </ListItem>
                        <ListItem>
                          Follow the directions of your local authorities.
                        </ListItem>
                      </List>
                      <br />
                      <Text fontWeight="500" marginBottom="10px">
                        Hear from AIIMS Director
                      </Text>
                      {YouTube}&nbsp;
                      <Link
                        paddingTop="2px"
                        href="https://www.youtube.com/watch?v=E8-UoeWewFI&t=10s"
                        isExternal
                      >
                        YouTube
                      </Link>
                      <br />
                      <br />
                      <Divider />
                      <Text margin="5px">
                        <Link
                          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                          isExternal
                        >
                          Learn more on WHO{" "}
                          <Icon name="external-link" mx="2px" />
                        </Link>{" "}
                      </Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box marginTop="15px">
                      <Text>
                        There is no specific treatment for coronavirus
                        (COVID-19). People with COVID 19 should receive
                        supportive care to relieve symptoms. Currently there is
                        no vaccine to prevent the disease.
                      </Text>
                      <br />
                      <Text>
                        But we can do self care. If you feel sick you should
                        rest, drink plenty of fluid, and eat nutritious food.
                        Stay in a separate room from other family members, and
                        use a dedicated bathroom if possible. Clean and
                        disinfect frequently touched surfaces.
                      </Text>
                      <br />
                      <Text>
                        Talk to the people you trust, your family and friends if
                        you ever feel sad during a crisis.
                      </Text>
                      <br />
                      <Divider />
                      <Text margin="5px">
                        <Link
                          href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=treatment"
                          isExternal
                        >
                          Learn more on WHO{" "}
                          <Icon name="external-link" mx="2px" />
                        </Link>{" "}
                      </Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box marginTop="15px" lineHeight="200%">
                      <Box>
                        <Text fontWeight="500">Call helpline</Text>
                        <Text>+91-11-23978046</Text>
                      </Box>
                      <Divider />
                      <Box>
                        <Text fontWeight="500">E-mail ID</Text>
                        <Link href="mailto:ncov2019@gov.in">
                          <Icon name="email" />
                          &nbsp; ncov2019@gov.in
                        </Link>
                        &nbsp;/&nbsp;
                        <Link href="mailto:ncov2019@gmail.com">
                          <Icon name="email" />
                          &nbsp; ncov2019@gmail.com
                        </Link>
                      </Box>
                      <Divider />
                      <Text fontWeight="500">
                        Call helpline across multiple states
                      </Text>
                      <Link
                        href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
                        isExternal
                      >
                        MoHFW <Icon name="external-link" mx="2px" />
                      </Link>
                    </Box>
                    <Divider />
                    <Box>
                      <Text fontWeight="500" marginBottom="10px">
                        Aarogya Setu App
                      </Text>
                      <Text>
                        {Android}&nbsp;
                        <Link
                          paddingTop="2px"
                          marginRight="10px"
                          href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en_US"
                          isExternal
                        >
                          &nbsp;Android
                        </Link>
                        {IOS}&nbsp;
                        <Link
                          paddingTop="2px"
                          href="https://apps.apple.com/app/id1505825357"
                          isExternal
                        >
                          &nbsp;iOS
                        </Link>
                      </Text>
                    </Box>
                    <Divider />
                    <Box marginTop="20px">
                      Data from :{" "}
                      <Link href="https://www.mohfw.gov.in/" isExternal>
                        Ministry of Health & Family Welfare{" "}
                        <Icon name="external-link" />
                      </Link>
                    </Box>
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
