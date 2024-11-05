"use client";

import { styled } from "@/utils/styling";
import Icon from "feather-icons-react";

const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  borderTop: ".4vh solid #ff5655",
  padding: "3vh",
  textAlign: "left",
});

const Header = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: ".2vh",

  "& span": {
    opacity: 0.64,
    marginLeft: "1vh",
  },
});

const Button = styled("div", {
  width: "4.6vh",
  height: "4.6vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#ffeeee",

  "& svg": {
    height: "3vh",
    width: "auto",
    color: "#ff5655",
  },
});

const Title = styled("h1", {
  fontSize: "3.6vh",
  margin: "3vh 0 .4vh",
  padding: 0,
});

const ErrorMessage = styled("span", {
  color: "#ff5655",
  fontSize: "3.2vh",
});

const Subtitle = styled("h2", {
  margin: "2.4vh 0 0",
  padding: 0,
  fontSize: "2.4vh",
});

const Callstack = styled("div", {
  opacity: 0.4,
  display: "flex",
  flexDirection: "column",
});

const FunctionName = styled("h3", {
  fontSize: "2.4vh",
  margin: "1.6vh 0 .4vh",
});

const FilePath = styled("span", {
  fontSize: "2vh",
  padding: "0 3vh",
});

export function HydrationError() {
  return (
    <Container className="sans">
      <Header>
        <Button>
          <Icon icon="arrow-left" />
        </Button>
        <Button>
          <Icon icon="arrow-right" />
        </Button>
        <span className="mono">1 of 3 undhandled errors</span>
      </Header>

      <main>
        <Title>Unhandled Runtime Error</Title>
        <ErrorMessage className="mono">
          Error: Hydration failed because the initial UI does not match what was
          rendered on the server.
        </ErrorMessage>
      </main>

      <div>
        <Subtitle>Call Stack</Subtitle>

        <Callstack>
          <FunctionName className="mono">throwOnHydrationMismatch</FunctionName>
          <FilePath>
            node_modules/react-dom/cjs/react-dom.development.js (12507:0)
          </FilePath>

          <FunctionName className="mono">
            tryToClaimHydratableInstance
          </FunctionName>
          <FilePath>
            node_modules/react-dom/cjs/react-dom.development.js (12520:0)
          </FilePath>
        </Callstack>
      </div>
    </Container>
  );
}
