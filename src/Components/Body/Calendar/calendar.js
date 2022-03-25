import React from "react";
import { Box, Grommet, Calendar } from "grommet";

export default function Currentdate() {
  return (
    <Box fill="true" pad="xsmall">
      <Calendar
        alignSelf="center"
        firstDayOfWeek={1}
        style={{
          backgroundColor: "#DADADA",
          padding: "5%",
          borderRadius: "1rem",
          color: "#333333",
          maxWidth: "90%",
          minWidth: "70%",
        }}
        size="small"
        date={new Date().toISOString()}
        onSelect={(date) => {}}
      />
    </Box>
  );
}
