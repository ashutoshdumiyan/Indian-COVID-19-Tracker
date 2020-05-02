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
import "./App.css";
import States from "./components/States";

class App extends Component {
  state = {
    total: {
      totalActive: 0,
      totalConfirmed: 0,
      totalDeaths: 0,
      totalRecovered: 0,
    },
    delta: { deltaConfirmed: 0, deltaDeaths: 0, deltaRecovered: 0 },
    dates: { confirmed: [], active: [], recovered: [], deaths: [] },
    statewise: [],
  };

  componentDidMount() {
    Axios.get("https://api.covid19india.org/data.json").then((res) => {
      let c = [[], []];
      let r = [[], []];
      let d = [[], []];
      let a = [[], []];
      console.log(res.data);
      res.data.cases_time_series.forEach((val, index) => {
        let dt = val.date.trim();
        dt = dt.substring(0, 6);
        c[0].push(dt);
        c[1].push(val.dailyconfirmed);
        r[0].push(dt);
        r[1].push(val.dailyrecovered);
        d[0].push(dt);
        d[1].push(val.dailydeceased);
        a[0].push(dt);
        let vl =
          c[1][c[1].length - 1] - r[1][r[1].length - 1] - d[1][d[1].length - 1];
        if (vl < 0) {
          vl = 0;
        }
        a[1].push(vl);
      });
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
        dates: {
          confirmed: c,
          active: a,
          recovered: r,
          deaths: d,
        },
        statewise: res.data.statewise.slice(1),
      });
    });
  }

  render() {
    const { dates, total, delta, statewise } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Flex align="center" justify="center" p={[10, 10, 10, 10]}>
          <Text textTransform="uppercase" color="#a6c1ee" fontSize="40px">
            Coronavirus (COVID-19) Pandemic Stats
          </Text>
        </Flex>
        <Blocks dates={dates} total={total} delta={delta} />
        <Grid templateColumns="repeat(auto-fit, minmax(350px,1fr))" gap={6}>
          <Box>
            <States statewise={statewise} />
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
