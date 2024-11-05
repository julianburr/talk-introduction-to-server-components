import "./like-button.css";

import { keyframes, styled } from "@/utils/styling";

const Window = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
});

const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "$grey-100",
  color: "$white",
  padding: "3vh",
});

const Label = styled("h1", {
  fontSize: "36vh",
  color: "rgba(255,255,255,.2)",
});

export function SkeletonView({ label, devtools }: any) {
  return (
    <Window>
      <Container>
        <Label>{label}</Label>
      </Container>
      {devtools}
    </Window>
  );
}
