import { styled } from "@/utils/styling";
import sponsorsPng from "@/assets/sponsors.png";
import { useServerSlide } from "@/utils/useServerSlide";

const Container = styled("div", {
  transition: "all .4s",
  position: "absolute",
  bottom: "105vh",
  left: "5vh",
  right: "5vh",
  height: "90vh",

  '&[data-visible="true"]': {
    bottom: "5vh",
  },
});

const Img = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

type Props = {
  slide?: string;
};

export function Sponsors({ slide }: Props) {
  const { era } = useServerSlide(slide);
  return (
    <Container data-visible={era === "sponsors"}>
      <Img src={sponsorsPng.src} />
    </Container>
  );
}
