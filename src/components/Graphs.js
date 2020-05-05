import React, { Component } from "react";
import Axios from "axios";
import { Line } from "react-chartjs-2";
import { Box, Flex, FormLabel, Switch, Spinner } from "@chakra-ui/core";

class Graphs extends Component {
  state = {
    allstates: {},
    dates: [],
    graphType: "linear",
    loading: true,
  };

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    Axios.get("https://api.covid19india.org/states_daily.json").then((res) => {
      let all = {
        an: { cfd: [], rcvd: [], dead: [] },
        ap: { cfd: [], rcvd: [], dead: [] },
        ar: { cfd: [], rcvd: [], dead: [] },
        as: { cfd: [], rcvd: [], dead: [] },
        br: { cfd: [], rcvd: [], dead: [] },
        ch: { cfd: [], rcvd: [], dead: [] },
        ct: { cfd: [], rcvd: [], dead: [] },
        dd: { cfd: [], rcvd: [], dead: [] },
        dl: { cfd: [], rcvd: [], dead: [] },
        dn: { cfd: [], rcvd: [], dead: [] },
        ga: { cfd: [], rcvd: [], dead: [] },
        gj: { cfd: [], rcvd: [], dead: [] },
        hp: { cfd: [], rcvd: [], dead: [] },
        hr: { cfd: [], rcvd: [], dead: [] },
        jh: { cfd: [], rcvd: [], dead: [] },
        jk: { cfd: [], rcvd: [], dead: [] },
        ka: { cfd: [], rcvd: [], dead: [] },
        kl: { cfd: [], rcvd: [], dead: [] },
        la: { cfd: [], rcvd: [], dead: [] },
        ld: { cfd: [], rcvd: [], dead: [] },
        mh: { cfd: [], rcvd: [], dead: [] },
        ml: { cfd: [], rcvd: [], dead: [] },
        mn: { cfd: [], rcvd: [], dead: [] },
        mp: { cfd: [], rcvd: [], dead: [] },
        mz: { cfd: [], rcvd: [], dead: [] },
        nl: { cfd: [], rcvd: [], dead: [] },
        or: { cfd: [], rcvd: [], dead: [] },
        pb: { cfd: [], rcvd: [], dead: [] },
        py: { cfd: [], rcvd: [], dead: [] },
        rj: { cfd: [], rcvd: [], dead: [] },
        sk: { cfd: [], rcvd: [], dead: [] },
        tg: { cfd: [], rcvd: [], dead: [] },
        tn: { cfd: [], rcvd: [], dead: [] },
        tr: { cfd: [], rcvd: [], dead: [] },
        tt: { cfd: [], rcvd: [], dead: [] },
        up: { cfd: [], rcvd: [], dead: [] },
        ut: { cfd: [], rcvd: [], dead: [] },
        wb: { cfd: [], rcvd: [], dead: [] },
      };
      let dates = [];
      let i = 0;
      for (i = 0; i < res.data.states_daily.length; i++) {
        let element = res.data.states_daily[i];
        let dt = element["date"];
        let st = element["status"];
        if (dates.length === 0) {
          dates.push(dt);
        } else {
          if (dates[dates.length - 1] !== dt) {
            dates.push(dt);
          }
        }
        if (st === "Confirmed") {
          for (let prop in element) {
            if (all.hasOwnProperty(prop)) {
              all[prop].cfd.push(element[prop]);
            }
          }
        } else if (st === "Recovered") {
          for (let prop in element) {
            if (all.hasOwnProperty(prop)) {
              all[prop].rcvd.push(element[prop]);
            }
          }
        } else {
          for (let prop in element) {
            if (all.hasOwnProperty(prop)) {
              all[prop].dead.push(element[prop]);
            }
          }
        }
      }
      this.setState({
        allstates: all,
        dates: dates,
        graphType: "linear",
        loading: false,
      });
    });
  }

  changeType = () => {
    if (this.state.graphType === "linear") {
      this.setState({ ...this.state, graphType: "logarithmic" });
    } else {
      this.setState({ ...this.state, graphType: "linear" });
    }
  };
  handleChecked = () => {
    if (this.state.graphType === "linear") {
      return false;
    } else {
      return true;
    }
  };

  renderGraphs = (code) => {
    let len = this.state.dates.length;
    let a = [];
    for (let index = 0; index < len; index++) {
      a.push(0);
    }
    return (
      <>
        <Line
          data={{
            labels: this.state.dates,
            datasets: [
              {
                label: "Confirmed",
                data: code === "xx" ? a : this.state.allstates[code].cfd,
                borderColor: "#805ad5",
                fill: true,
                backgroundColor: "#e9d8fd",
              },
            ],
          }}
          options={{
            scales: {
              yAxes: [
                {
                  type: this.state.graphType,
                },
              ],
            },
          }}
        />
        <br />
        <Line
          data={{
            labels: this.state.dates,
            datasets: [
              {
                label: "Recovered",
                data: code === "xx" ? a : this.state.allstates[code].rcvd,
                borderColor: "#38a169",
                fill: true,
                backgroundColor: "#c6f6d5",
              },
            ],
          }}
          options={{
            scales: {
              yAxes: [
                {
                  type: this.state.graphType,
                },
              ],
            },
          }}
        />
        <br />
        <Line
          data={{
            labels: this.state.dates,
            datasets: [
              {
                label: "Deaths",
                data: code === "xx" ? a : this.state.allstates[code].dead,
                borderColor: "#e53e3e",
                fill: true,
                backgroundColor: "#fed7d7",
              },
            ],
          }}
          options={{
            scales: {
              yAxes: [
                {
                  type: this.state.graphType,
                },
              ],
            },
          }}
        />
      </>
    );
  };

  render() {
    console.log(this.props);
    let { name, code } = this.props.currentState;
    if (name === "") {
      name = "No state selected";
    }
    if (code === "") {
      code = "xx";
    }
    if (this.state.loading) {
      return (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      );
    } else {
      return (
        <Box m={[5, 5, 5, 5]}>
          <Flex
            justify="center"
            direction="column"
            align="center"
            marginBottom="10px"
          >
            <Box marginBottom="5px">
              <strong>State :</strong> {name}
            </Box>
            <Box>
              <FormLabel htmlFor="logarithm">Logarithmic</FormLabel>
              <Switch
                isChecked={this.handleChecked()}
                onChange={this.changeType}
                value={this.state.graphType}
                id="logarithm"
              />
            </Box>
          </Flex>
          {this.renderGraphs(code)}
        </Box>
      );
    }
  }
}

export default Graphs;
