import { styled } from "@/utils/styling";
import Icon from "feather-icons-react";

const Container = styled("div", {
  width: "58vh",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: "$white",
  color: "$black",
  overflow: "hidden",
});

const Header = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  background: "#efedeb",
});

const IconButton = styled("div", {
  width: "1.8vh",
  height: "1.8vh",
  margin: ".9vh",
  display: "flex",
  color: "rgba(0,0,0,.3)",

  "& svg": {
    height: "100%",
    width: "auto",
  },
});

const Button = styled("div", {
  display: "flex",
  padding: "1vh .8vh",
  fontSize: "1.6vh",
  lineHeight: 1,
  margin: 0,
  color: "rgba(0,0,0,.3)",
  borderBottom: "1px solid rgba(0,0,0,0)",

  variants: {
    active: {
      true: {
        color: "rgba(0,0,0,.8)",
        borderBottom: "1px solid rgba(0,0,0,.8)",
      },
    },
  },
});

const Spacer = styled("div", {
  display: "flex",
  flex: 1,
});

const Content = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  position: "relative",
});

export function Devtools({ selected, children }: any) {
  return (
    <Container className="sans">
      <Header>
        <IconButton>
          <Icon icon="layers" />
        </IconButton>
        <IconButton>
          <Icon icon="layout" />
        </IconButton>
        <Button>Console</Button>
        <Button active={selected === "network"}>Network</Button>
        <Button active={selected === "sources"}>Sources</Button>
        <Spacer />
        <IconButton>
          <Icon icon="settings" />
        </IconButton>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}
