import React from "react";
import { Box, Grommet } from "grommet";
import Currentdate from "./Calendar/calendar";
import RandomQuote from "./Quote/randomquote";

const myTheme = {
  heading: {
    font: {
      family: "stella cursive serif",
      size: "xxlarge",
    },
  },
};

export default function Body() {
  return (
    <Box
      margin={{
        top: "large",
      }}
      gap="medium"
      direction="row-responsive"
      border={{ color: "dark-3", size: "xsmall" }}
      elevation="small"
      pad="small"
    >
      {/* ------------- Left Column --------------- */}
      <Box
        direction="row-responsive"
        fill={true}
        pad="xsmall"
        background="dark-3"
        gap="small"
      >
        <Currentdate />
        <RandomQuote />
      </Box>
      {/* ------------- Right Column --------------- */}
      <Box direction="column" pad="none" fill={true} background="neutral-33">
        <Box fill={true} pad="small" background="light-5"></Box>
        <Box fill={true} pad="small" background="dark-5"></Box>
      </Box>
    </Box>
  );
}
