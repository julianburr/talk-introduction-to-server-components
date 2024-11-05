"use client";

import { keyframes, styled } from "@/utils/styling";

import LoadingSvg from "@/assets/loading.svg";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  background: "#fff",
  position: "relative",
});

const Top = styled("div", {
  background: "$windowTopLight",
  width: "100%",
  height: "3vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  gap: "1vh",
  padding: "0 1vh",
});

const Buttons = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: ".2vh",
});

const Dot = styled("div", {
  width: "1vh",
  height: "1vh",
  borderRadius: "50%",
  background: "$windowTopDark",
});

const Title = styled("h1", {
  margin: ".2vh 0 0",
  padding: 0,
  lineHeight: 1,
  fontSize: "1.5vh",
  display: "flex",
  flex: 1,
  opacity: 0.5,
});

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "50%": { transform: "rotate(180deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const Loading = styled("div", {
  height: "5vh",
  width: "5vh",
  borderRadius: "50%",
  position: "absolute",
  top: "-1vh",
  right: "-1vh",
  background: "$red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: `${rotate} 2s ease-in-out infinite`,
  transition: "scale .4s, opacity .4s",
  scale: 0.8,
  opacity: 0,

  "& svg": {
    height: "3vh",
    width: "auto",
    color: "$white",
  },

  '&[data-visible="true"]': {
    scale: 1,
    opacity: 1,
  },
});

const Content = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  overflow: "hidden",
});

function Window({ title, children, loading }: any) {
  return (
    <Container>
      <Top>
        <Buttons>
          <Dot />
          <Dot />
          <Dot />
        </Buttons>
        {title && <Title>{title}</Title>}

        <Loading data-visible={loading}>
          <LoadingSvg />
        </Loading>
      </Top>

      <Content>{children}</Content>
    </Container>
  );
}

export { Window };
