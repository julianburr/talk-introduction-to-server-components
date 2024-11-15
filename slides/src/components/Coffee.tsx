import { styled } from "@/utils/styling";
import { useServerSlide } from "@/utils/useServerSlide";

import CoffeeMugSvg from "@/assets/coffee-mug.svg";
import CoffeeCupSvg from "@/assets/coffee-cup.svg";

const CoffeeMug = styled(CoffeeMugSvg, {
  position: "absolute",
  bottom: "-50vh",
  left: "calc(50% - 60vh)",
  transition: "bottom .6s, left .4s",
  width: "24vh",
  height: "auto",

  '&[data-visible="true"]': {
    bottom: "1vh",
  },

  '&[data-left="true"]': {
    left: "-40vh",
  },
});

const CoffeeCup = styled(CoffeeCupSvg, {
  position: "absolute",
  bottom: "-50vh",
  left: "calc(50% - 60vh)",
  transition: "bottom .6s, left .4s",
  width: "30vh",
  height: "auto",

  '&[data-visible="true"]': {
    bottom: "2.5vh",
  },

  '&[data-left="partial"]': {
    left: "calc(50% - 68vh)",
  },

  '&[data-left="full"]': {
    left: "-40vh",
  },
});

type Props = {
  slide?: string;
};

export function Coffee({ slide }: Props) {
  const s = useServerSlide(slide);

  const visible = !["sponsors", "title"].includes(s.era);
  const mugLeft = !(["html", "ajax"].includes(s.era) || s.slide === 0);

  const cupLeft = ["rsc"].includes(s.era)
    ? "full"
    : ["ssr"].includes(s.era)
    ? "partial"
    : undefined;

  return (
    <>
      <CoffeeMug data-visible={visible} data-left={mugLeft} />
      <CoffeeCup data-visible={visible && mugLeft} data-left={cupLeft} />
    </>
  );
}
