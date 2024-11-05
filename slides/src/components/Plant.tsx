"use client";

import { styled } from "@/utils/styling";
import { useSlide } from "@/utils/useSlide";

import PlantSvg from "@/assets/plant.svg";

const PlantIllustation = styled(PlantSvg, {
  position: "absolute",
  left: "calc(50% + 40vh)",
  width: "60vh",
  height: "auto",
  bottom: "13vh",
  transition: "bottom .8s, left .4s",

  "& #leave1, & #leave2, & #leave3, & #leave4, & #leave5": {
    transition: "all .4s ease-in-out",
    transformOrigin: "bottom center",
  },

  variants: {
    size: {
      small: {
        left: "calc(50% + 40vh)",

        "& #leave3": {
          scale: 0.55,
        },

        "& #leave1, & #leave2": {
          scale: 0.5,
        },

        "& #leave4, & #leave5": {
          scale: 0.4,
        },
      },
      medium: {
        left: "calc(50% + 63vh)",

        "& #leave3": {
          scale: 0.7,
        },

        "& #leave1, & #leave2": {
          scale: 0.65,
        },

        "& #leave4, & #leave5": {
          scale: 0.55,
        },
      },
      large: {
        left: "calc(50% + 63vh)",
      },
    },

    right: {
      true: {
        left: "105%",
      },
    },
  },
});

function Plant({ contents }: any) {
  const { era } = useSlide(contents);

  const right = !era || ["rsc"].includes(era);
  const size = ["rsc", "ssr"].includes(era)
    ? "large"
    : ["spa", "ajax"].includes(era)
    ? "medium"
    : "small";

  return <PlantIllustation right={right} size={size} />;
}

export { Plant };
