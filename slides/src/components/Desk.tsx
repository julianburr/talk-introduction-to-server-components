"use client";

import { styled } from "@/utils/styling";
import { useSlide } from "@/utils/useSlide";

const Container = styled("div", {
  transition: "all .4s",
  position: "absolute",
  left: 0,
  right: 0,
  bottom: "-30vh",
  height: "20vh",
  background: "$desk",

  variants: {
    visible: {
      true: {
        bottom: 0,
      },
    },
  },
});

function Desk() {
  const { slide } = useSlide();
  return <Container visible />;
}

export { Desk };
