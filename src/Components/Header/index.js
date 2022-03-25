import React from "react";
import { Box, Grommet, Header, Button, Clock, Image, Heading } from "grommet";
import { Vulnerability, Notes, Phone, Analytics } from "grommet-icons";
import Logo from "./Logo.png";

const myTheme = {
  heading: {
    font: {
      family: "Kanit",
      size: "xxlarge",
    },
  },
};

export default function Nav() {
  return (
    <Grommet theme={myTheme} pad="none">
      <Header background="dark-1" pad="medium">
        <Button background="dark-1" label="Refresh" hoverIndicator />
        <Box direction="row" pad="none" elevation="xxsmall">
          {/* Left Section ^^^^^^   */}
          <Box pad="none" direction="row">
            <Heading
              style={{ fontSize: "3.4rem" }}
              margin={{ horizontal: "large", vertical: "none" }}
              color="light-2"
              level="2"
            >
              Call Logger
              <span
                style={{
                  paddingTop: "1rem",
                  fontSize: "1.4rem",
                  color: "#FF4040",
                }}
              >
                V.1
              </span>
            </Heading>
            <Box pad={{ top: "small" }} direction="row">
              <div
                style={{
                  margin: "2% 5% 1% 1%",
                }}
              >
                <Notes size="medium" color="light-1" />
              </div>
              <div
                style={{
                  margin: "2% 5% 2% 1%",
                }}
              >
                <Phone size="medium" color="status-ok" />
              </div>
              <div
                style={{
                  margin: "2% 5% 2% 1%",
                }}
              >
                <Analytics size="medium" color="status-critical" />
              </div>
            </Box>
          </Box>
        </Box>

        <Clock type="digital" />
      </Header>
    </Grommet>
  );
}
