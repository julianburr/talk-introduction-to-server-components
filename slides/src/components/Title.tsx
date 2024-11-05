"use client";

import { styled } from "@/utils/styling";
import { useSlide } from "@/utils/useSlide";

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

  variants: {
    visible: {
      true: {
        opacity: 1,
      },
    },
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

  variants: {
    visible: {
      true: {
        opacity: 1,
      },
    },
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

  variants: {
    visible: {
      true: {
        opacity: 0.2,
      },
    },
  },
});

export function Title() {
  const { slide } = useSlide();
  return (
    <>
      <Heading visible={slide === 0}>
        An Introduction to Server Components
      </Heading>
      <Subtitle visible={slide === 0}>and the Future of Web Rendering</Subtitle>
      <Meta visible={slide === 0}>
        Julian Burr
        <br />@ DDD Perth &apos;24
      </Meta>
    </>
  );
}
