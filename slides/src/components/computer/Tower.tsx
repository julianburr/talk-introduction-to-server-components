import { styled } from "@/utils/styling";

const Container = styled("div", {
  transition: "all .4s",
  position: "absolute",
  bottom: "-60vh",
  left: "calc(50% - 40vh)",
  width: "80vh",
  height: "26vh",
  background: "$computerOld",
  borderRadius: "3vh",

  variants: {
    era: {
      html: {
        bottom: "10vh",
      },
      ajax: {
        left: "calc(50% - 60vh)",
        bottom: "10vh",
        width: "35vh",
        height: "85vh",
      },
      spa: {
        left: "calc(50% - 60vh)",
        bottom: "10vh",
        width: "35vh",
        height: "85vh",
        background: "$computerNormal",
      },
      ssr: {
        bottom: "10vh",
        width: "35vh",
        height: "85vh",
        background: "$computerNormal",
        left: "-40vh",
      },
      rsc: {
        bottom: "10vh",
        width: "35vh",
        height: "85vh",
        background: "$computerNormal",
        left: "-40vh",
      },
    },
  },
});

export function Tower({ era }: any) {
  return <Container era={era} />;
}
