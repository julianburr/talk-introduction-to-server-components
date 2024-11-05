"use client";

import { PropsWithChildren } from "react";

import { styled } from "@/utils/styling";

const Container = styled("div", {
  transition: "all 0.4s",
  display: "flex",
  width: "68vh",
  height: "62vh",
  background: "$computerOld",
  borderRadius: "3vh",
  position: "absolute",
  bottom: "-70vh",
  left: "calc(50% - 34vh)",

  variants: {
    era: {
      html: {
        bottom: "37vh",
      },
      ajax: {
        width: "80vh",
        height: "76vh",
        bottom: "14vh",
        left: "calc(50% - 22vh)",
      },
      spa: {
        width: "85vh",
        height: "70vh",
        bottom: "24vh",
        left: "calc(50% - 22vh)",
        background: "$computerNormal",
      },
      ssr: {
        width: "100vh",
        height: "74vh",
        bottom: "24vh",
        left: "calc(50% - 50vh)",
        background: "$computerModern",
      },
      rsc: {
        width: "100vw",
        height: "100vh",
        bottom: "0",
        left: "calc(50% - 50vw)",
        background: "$computerModern",
        borderRadius: "0",
      },
    },
  },
});

const WrapScreen = styled("div", {
  transition: "all 0.4s",
  position: "absolute",
  inset: "8vh",
  background: "$black",
  borderRadius: "2vh",
  overflow: "hidden",

  variants: {
    era: {
      html: {},
      ajax: {
        bottom: "11vh",
      },
      spa: {
        inset: "4vh",
        borderRadius: "1.5vh",
      },
      ssr: {
        inset: "2vh",
        bottom: "6vh",
        borderRadius: "1.5vh",
      },
      rsc: {
        inset: "0",
        bottom: "0",
        borderRadius: "0",
      },
    },
  },
});

const Stand = styled("div", {
  transition: "all 0.4s",
  position: "absolute",
  bottom: "-0.5vh",
  height: 0,
  width: 0,
  left: "50%",
  borderRadius: "1.5vh",
  background: "$computerOld",

  "&:before": {
    transition: "all 0.4s",
    position: "absolute",
    content: '" "',
    bottom: 0,
    left: "50%",
    width: 0,
    height: 0,
    background: "$computerOld",
  },

  variants: {
    era: {
      html: {},
      ajax: {
        bottom: "-4.5vh",
        height: "4vh",
        width: "60%",
        left: "20%",
      },
      spa: {
        height: "10vh",
        width: "6vh",
        bottom: "-10.5vh",
        background: "$black",
        left: "calc(50% - 3vh)",
        borderRadius: "0.6vh",

        "&:before": {
          width: "16vh",
          left: "calc(50% - 8vh)",
          height: "1vh",
          borderRadius: "0.6vh 0.6vh 0 0",
          background: "$black",
        },
      },
      ssr: {
        height: "10vh",
        width: "20vh",
        bottom: "-10.5vh",
        background: "$black",
        borderRadius: "0.6vh",
        left: "calc(50% - 10vh)",

        "&:before": {
          width: "24vh",
          left: "calc(50% - 12vh)",
          height: "1vh",
          borderRadius: "0.6vh 0.6vh 0 0",
          background: "$black",
        },
      },
    },
  },
});

type MonitorProps = PropsWithChildren<any>;

export function Monitor({ era, children }: MonitorProps) {
  return (
    <Container era={era}>
      <WrapScreen era={era}>{children}</WrapScreen>
      <Stand era={era} />
    </Container>
  );
}
