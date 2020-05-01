import React, { Component } from "react";
import {
  theme,
  ThemeProvider,
  CSSReset,
  Flex,
  Box,
  Text,
  Grid,
} from "@chakra-ui/core";
import Axios from "axios";
import Blocks from "./components/Blocks";

class App extends Component {
  state = {
    total: {
      totalActive: 0,
      totalConfirmed: 0,
      totalDeaths: 0,
      totalRecovered: 0,
    },
    delta: { deltaConfirmed: 0, deltaDeaths: 0, deltaRecovered: 0 },
  };

  componentDidMount() {
    Axios.get("https://api.covid19india.org/data.json").then((res) => {
      console.log(res.data.statewise[0]);
      const totalData = res.data.statewise[0];
      this.setState({
        total: {
          totalActive: totalData.active,
          totalConfirmed: totalData.confirmed,
          totalDeaths: totalData.deaths,
          totalRecovered: totalData.recovered,
        },
        delta: {
          deltaConfirmed: totalData.deltaconfirmed,
          deltaDeaths: totalData.deltadeaths,
          deltaRecovered: totalData.deltarecovered,
        },
      });
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Flex align="center" justify="center" p={[10, 10, 10, 10]}>
          <Text textTransform="uppercase" color="#a6c1ee" fontSize="40px">
            Coronavirus (COVID-19) Pandemic Stats
          </Text>
        </Flex>
        <Blocks total={this.state.total} delta={this.state.delta} />
        <Grid templateColumns="repeat(auto-fit, minmax(200px,1fr))" gap={6}>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates provident consequatur consectetur ullam vitae vero aut.
              Vitae quisquam assumenda excepturi facilis, enim vel beatae,
              aspernatur, sit optio ullam omnis porro!
            </Text>
          </Box>
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates provident consequatur consectetur ullam vitae vero aut.
              Vitae quisquam assumenda excepturi facilis, enim vel beatae,
              aspernatur, sit optio ullam omnis porro!
            </Text>
          </Box>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default App;
