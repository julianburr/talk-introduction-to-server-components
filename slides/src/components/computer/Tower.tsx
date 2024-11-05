import { Era } from "@/utils/contents";
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

  '&[data-era="html"]': {
    bottom: "10vh",
  },

  '&[data-era="ajax"]': {
    left: "calc(50% - 60vh)",
    bottom: "10vh",
    width: "35vh",
    height: "85vh",
  },

  '&[data-era="spa"]': {
    left: "calc(50% - 60vh)",
    bottom: "10vh",
    width: "35vh",
    height: "85vh",
    background: "$computerNormal",
  },

  '&[data-era="ssr"]': {
    bottom: "10vh",
    width: "35vh",
    height: "85vh",
    background: "$computerNormal",
    left: "-40vh",
  },

  '&[data-era="rsc"]': {
    bottom: "10vh",
    width: "35vh",
    height: "85vh",
    background: "$computerNormal",
    left: "-40vh",
  },
});

type Props = {
  era: Era;
};

export function Tower({ era }: Props) {
  return <Container data-era={era} />;
}
