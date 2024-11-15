import { styled } from "@/utils/styling";
import { useServerSlide } from "@/utils/useServerSlide";

import windPoweredShips from "@/assets/meme-wind-powered-ships.jpeg";
import itIsEvolving from "@/assets/meme-it-is-evolving-just-backwards.jpeg";

const Container = styled("div", {
  transition: "all .4s",
  position: "absolute",
  background: "$white",
  borderRadius: "1vh",
  boxShadow: "0 0 2vh rgba(0, 0, 0, .05)",
  width: "60vw",
  left: "20vw",
  bottom: "10vh",
  opacity: 1,

  "& img": {
    width: "100%",
    height: "auto",
  },

  '&[data-position="bottom"]': {
    bottom: "-120vh",
    opacity: 0,
  },

  '&[data-position="top"]': {
    bottom: "120vh",
    opacity: 0,
  },
});

const User = styled("h2", {
  margin: 0,
  padding: ".8rem 1rem",
  fontWeight: "bold",
  fontSize: "2vh",
});

const Content = styled("div", {
  padding: ".8rem 1rem",
  fontSize: "3vh",

  "& a": {
    color: "inherit",
  },
});

const Comment = styled("div", {
  transition: "all .4s",
  position: "absolute",
  width: "30vw",
  background: "$white",
  borderRadius: "1vh",
  boxShadow: "0 0 2vh rgba(0, 0, 0, .05)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  bottom: "$$commentBottom",
  left: "$$commentLeft",
  rotate: "$$commentRotate",
  scale: 0.9,
  opacity: 0,

  [`& ${User}`]: {
    padding: ".8rem 1rem .4rem",
  },

  [`& ${Content}`]: {
    padding: "0 1rem .8rem",
  },

  "& img": {
    display: "flex",
    width: "100%",
    height: "auto",
  },

  '&[data-position="top"]': {
    bottom: "110vh",
    scale: 1,
    opacity: 0,
  },

  '&[data-position="visible"]': {
    scale: 1,
    opacity: 1,
  },
});

const MemeImg = styled("img", {});

type Props = {
  slide?: string;
};

export function Meme({ slide }: Props) {
  const s = useServerSlide(slide);
  return (
    <>
      <Container
        data-position={s.slide < 2 ? "bottom" : s.slide > 5 ? "top" : undefined}
      >
        <User>@dailytechnologynews</User>

        <MemeImg alt="Wind powered ships meme" src={windPoweredShips.src} />

        <Content>
          This wind powered cargo ship is set to change the way we ship the
          goods across oceans. The model is very practical and is looking at a
          possible launch in 2024.{" "}
          <a href="https://ift.tt/2MKA9Pb" target="_blank">
            https://ift.tt/2MKA9Pb
          </a>
        </Content>
      </Container>

      <Comment
        data-position={s.slide < 3 ? "bottom" : s.slide > 5 ? "top" : "visible"}
        css={{
          $$commentBottom: "62vh",
          $$commentLeft: "20vw",
          $$commentRotate: "-3deg",
        }}
      >
        <User>@guabirudropout2</User>
        <Content>Wind powered ships!? What a time to be alive!</Content>
      </Comment>

      <Comment
        data-position={s.slide < 4 ? "bottom" : s.slide > 5 ? "top" : "visible"}
        css={{
          $$commentBottom: "54vh",
          $$commentLeft: "18vw",
          $$commentRotate: "2deg",
        }}
      >
        <User>@daco-bromanian</User>
        <Content>we really are in the future</Content>
      </Comment>

      <Comment
        data-position={s.slide < 5 ? "bottom" : s.slide > 5 ? "top" : "visible"}
        css={{
          width: "38vw",
          $$commentBottom: "40vh",
          $$commentLeft: "18vw",
        }}
      >
        <MemeImg alt="It is evolving, just backwards" src={itIsEvolving.src} />
      </Comment>
    </>
  );
}
