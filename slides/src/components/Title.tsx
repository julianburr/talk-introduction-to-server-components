import { styled } from "@/utils/styling";
import { useServerSlide } from "@/utils/useServerSlide";

const Heading = styled("h1", {
  transition: "opacity .4s",
  position: "absolute",
  bottom: "52vh",
  left: 0,
  right: 0,
  width: "100%",
  maxWidth: "100vh",
  margin: "0 auto",
  padding: 0,
  textAlign: "center",
  fontSize: "12vh",
  lineHeight: 1,
  letterSpacing: ".3rem",
  opacity: 0,

  '&[data-visible="true"]': {
    opacity: 1,
  },
});

const Subtitle = styled("span", {
  transition: "opacity .4s",
  position: "absolute",
  bottom: "40vh",
  left: 0,
  right: 0,
  width: "100%",
  maxWidth: "90vh",
  margin: "0 auto",
  padding: 0,
  textAlign: "center",
  fontSize: "6vh",
  lineHeight: 1,
  opacity: 0,

  '&[data-visible="true"]': {
    opacity: 1,
  },
});

const Meta = styled("span", {
  transition: "opacity .4s",
  position: "absolute",
  bottom: "4vh",
  left: 0,
  right: 0,
  width: "100%",
  maxWidth: "90vh",
  margin: "0 auto",
  textAlign: "center",
  fontSize: "4vh",
  lineHeight: 1.1,
  opacity: 0,

  '&[data-visible="true"]': {
    opacity: 0.2,
  },
});

type Props = {
  slide?: string;
};

export function Title({ slide }: Props) {
  const s = useServerSlide(slide);
  return (
    <>
      <Heading data-visible={s.slide === 0}>
        An Introduction to Server Components
      </Heading>
      <Subtitle data-visible={s.slide === 0}>
        and the Future of Web Rendering
      </Subtitle>
      <Meta data-visible={s.slide === 0}>
        Julian Burr
        <br />@ DDD Perth &apos;24
      </Meta>
    </>
  );
}
