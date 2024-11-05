import { Desk } from "@/components/Desk";
import { Books } from "@/components/Books";
import { Plant } from "@/components/Plant";
import { Computer } from "@/components/Computer";
import { Title } from "@/components/Title";
import { Coffee } from "@/components/Coffee";
import { ClientKeyboardController } from "@/components/utils/ClientKeyboardController";
import { contents } from "@/utils/contents";
import { Meme } from "@/components/Meme";
import { styled } from "@/utils/styling";

const Container = styled("div", {
  position: "fixed",
  inset: 0,
  background: "$wall",
});

export default async function Slide({ searchParams }: any) {
  const p = await searchParams;
  const slide = p.slide;

  console.log({ slide });

  return (
    <>
      <Container>
        <Desk />
        <Books slide={slide} />
        <Plant slide={slide} />

        <Computer slide={slide} />
        <Title slide={slide} />
        <Meme slide={slide} />

        <Coffee slide={slide} />
      </Container>

      <ClientKeyboardController max={contents.length - 1} />
    </>
  );
}
