import { styled } from "@/utils/styling";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2.4vh",
});

const Element = styled("div", {
  background: "$grey",
  transition: "background .1s",

  '&[data-hydrated="true"], [data-hydrated="true"] &': {
    background: "$green",
  },
});

const Hero = styled(Element, {
  width: "100%",
  height: "20%",
});

const Inner = styled("div", {
  width: "80%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "2.4vh",
});

const Article = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "2vh",
  width: "100%",
  height: "40%",
});

const Img = styled(Element, {
  width: "100%",
  height: "100%",
  borderRadius: "1vh",
});

const WrapContent = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: ".7vh",
  padding: "1vh 0",
});

const Title = styled(Element, {
  width: "60%",
  height: "1.4vh",
  borderRadius: ".2vh",
});

const Lines = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: ".5vh",
});

const Line = styled(Element, {
  width: "100%",
  height: ".6vh",
  borderRadius: ".2vh",

  "&:last-child": {
    width: "40%",
  },
});

const Button = styled(Element, {
  margin: ".8vh 0 0",
  width: "30%",
  height: "2vh",
  borderRadius: ".5vh",
});

const Carousel = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: ".5vh",
  width: "100%",
  height: "25%",
});

const CarouselItem = styled(Element, {
  height: "100%",
  width: "25%",
  borderRadius: "1vh",
});

const CarouselNav = styled("div", {
  width: "12%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CarouselButton = styled(Element, {
  width: "2.4vh",
  height: "2.4vh",
  borderRadius: "50%",
});

export function BrowserContent({ era, hydrated }: any) {
  const fullHydrated = hydrated && ["spa", "ssr"].includes(era);
  return (
    <Container data-hydrated={fullHydrated}>
      <Hero />
      <Inner>
        <Article>
          <Img />
          <WrapContent>
            <Title />
            <Lines>
              <Line />
              <Line />
              <Line />
              <Line />
            </Lines>
            <Button data-hydrated={hydrated} />
          </WrapContent>
        </Article>

        <Carousel>
          {era !== "html" && (
            <CarouselNav>
              <CarouselButton data-hydrated={hydrated} />
            </CarouselNav>
          )}
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          {era !== "html" && (
            <CarouselNav>
              <CarouselButton data-hydrated={hydrated} />
            </CarouselNav>
          )}
        </Carousel>
      </Inner>
    </Container>
  );
}
