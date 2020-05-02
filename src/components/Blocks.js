import React, { Component } from "react";
import { Grid } from "@chakra-ui/core";
import BlocksModal from "./BlocksModal";

class Blocks extends Component {
  render() {
    const {
      totalActive,
      totalConfirmed,
      totalDeaths,
      totalRecovered,
    } = this.props.total;
    const { confirmed, active, recovered, deaths } = this.props.dates;
    const { deltaConfirmed, deltaDeaths, deltaRecovered } = this.props.delta;
    return (
      <Grid
        p={[20, 20, 20, 20]}
        templateColumns="repeat(auto-fit, minmax(200px,1fr))"
        gap={6}
      >
        <BlocksModal
          total={totalConfirmed}
          delta={deltaConfirmed}
          bColor="purple.100"
          tColor="purple.500"
          title="confirmed cases"
          dates={confirmed}
        />
        <BlocksModal
          total={totalActive}
          delta={null}
          bColor="blue.100"
          tColor="blue.500"
          title="active cases"
          dates={active}
        />
        <BlocksModal
          total={totalRecovered}
          delta={deltaRecovered}
          bColor="green.100"
          tColor="green.500"
          title="recoveries"
          dates={recovered}
        />
        <BlocksModal
          total={totalDeaths}
          delta={deltaDeaths}
          bColor="red.100"
          tColor="red.500"
          title="deaths"
          dates={deaths}
        />
      </Grid>
    );
  }
}

export default Blocks;
