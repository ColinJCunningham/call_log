import React from "react";
import { Box, Paragraph, Grommet } from "grommet";
import Random from "../../../Utils/quotes";

const myTheme = {
  paragraph: {
    font: {
      family: "stella",
    },
  },
};

const number = Math.floor(Math.random() * 20 + 1);

export default function Quote() {
  return (
    <Grommet theme={myTheme} pad="none">
      <button onClick={(e) => console.log(Random[number])}> </button>
      <Box pad="small">
        <Paragraph textAlign="justify" alignSelf="center" size="xlarge">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </Box>
    </Grommet>
  );
}
