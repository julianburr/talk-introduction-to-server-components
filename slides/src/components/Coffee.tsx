"use client";

import { styled } from "@/utils/styling";
import { useSlide } from "@/utils/useSlide";

import CoffeeMugSvg from "@/assets/coffee-mug.svg";
import CoffeeCupSvg from "@/assets/coffee-cup.svg";

const CoffeeMug = styled(CoffeeMugSvg, {
  position: "absolute",
  bottom: "-50vh",
  left: "calc(50% - 60vh)",
  transition: "bottom .6s, left .4s",
  width: "24vh",
  height: "auto",

  variants: {
    visible: {
      true: {
        bottom: "1vh",
      },
    },
    left: {
      true: {
        left: "-40vh",
      },
    },
  },
});

const CoffeeCup = styled(CoffeeCupSvg, {
  position: "absolute",
  bottom: "-50vh",
  left: "calc(50% - 60vh)",
  transition: "bottom .6s, left .4s",
  width: "30vh",
  height: "auto",

  variants: {
    visible: {
      true: {
        bottom: "2.5vh",
      },
    },
    left: {
      partial: {
        left: "calc(50% - 68vh)",
      },
      full: {
        left: "-40vh",
      },
    },
  },
});

export function Coffee({ contents }: any) {
  const { era, slide } = useSlide(contents);

  const visible = !!era && !["title"].includes(era);
  const mugLeft = !(["html", "ajax"].includes(era) || slide === 0);

  const cupLeft = ["rsc"].includes(era)
    ? "full"
    : ["ssr"].includes(era)
    ? "partial"
    : undefined;

  return (
    <>
      <CoffeeMug visible={visible} left={mugLeft} />
      <CoffeeCup visible={visible && mugLeft} left={cupLeft} />
    </>
  );
}
