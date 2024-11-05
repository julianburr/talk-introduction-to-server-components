import { styled } from "@/utils/styling";

const Container = styled("div", {
  transition: "all 0.4s",
  transitionDelay: "0.1s",
  position: "absolute",
  bottom: "-100vh",
  left: "calc(50% + 32vh)",
  width: "14vh",
  height: "5vh",
  background: "$computerOld",
  borderRadius: "3vh 3vh 0 0",

  variants: {
    era: {
      html: {
        bottom: "1vh",
      },
      ajax: {
        bottom: "1vh",
        left: "calc(50% + 42vh)",
      },
      spa: {
        left: "calc(50% + 42vh)",
        bottom: "2vh",
        height: "4vh",
        background: "$computerNormal",
      },
      ssr: {
        bottom: "2vh",
        height: "3vh",
        background: "$computerModern",
      },
    },
  },
});

const Thumbs = styled("div", {
  transition: "all 0.4s",
  position: "absolute",
  top: "-0.4vh",
  left: "27%",
  width: " 46%",
  height: "0.4vh",
  display: "grid",
  gridTemplateColumns: " 1fr 1fr",
  gap: "0.2vh",

  "& > div": {
    width: "100%",
    height: "100%",
    background: "$black",

    "&:first-child": {
      borderRadius: "0.4vh 0 0 0",
    },

    "&:last-child": {
      borderRadius: "0 0.4vh 0 0",
    },
  },

  variants: {
    era: {
      ssr: {
        gap: "0vh",
      },
    },
  },
});

export function Mouse({ era }: any) {
  return (
    <Container era={era}>
      <Thumbs era={era}>
        <div />
        <div />
      </Thumbs>
    </Container>
  );
}
