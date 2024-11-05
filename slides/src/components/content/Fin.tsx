import Image from "next/image";

import { styled } from "@/utils/styling";

import qrCode from "@/assets/qrcode-github.png";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "5vh",
  lineHeight: 1.1,
});

const Title = styled("h1", {
  margin: 0,
  padding: 0,
  fontSize: "6vh",
});

const SubTitles = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: ".5vh",
});

const SubTitle = styled("h2", {
  margin: 0,
  padding: 0,
  fontSize: "3.2vh",
  opacity: 0.5,
});

function Fin() {
  return (
    <Container>
      <Image
        alt="QR code"
        {...qrCode}
        style={{ width: "32vh", height: "32vh" }}
      />

      <Title>
        github.com/julianburr/
        <br />
        talk-introduction-to-server-components
      </Title>

      <SubTitles>
        <SubTitle>julianburr.de</SubTitle>
        <SubTitle>github.com/julianburr</SubTitle>
        <SubTitle>twitter.com/jburr90</SubTitle>
      </SubTitles>

      <SubTitles>
        <SubTitle>@ DDD Perth ’24</SubTitle>
      </SubTitles>
    </Container>
  );
}

export { Fin };
