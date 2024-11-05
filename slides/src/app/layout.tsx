import type { Metadata } from "next";
import {
  Bebas_Neue,
  Permanent_Marker,
  Open_Sans,
  Source_Code_Pro,
} from "next/font/google";

import { Desk } from "@/components/Desk";
import { Books } from "@/components/Books";
import { Plant } from "@/components/Plant";
import { Computer } from "@/components/Computer";
import { Title } from "@/components/Title";
import { Coffee } from "@/components/Coffee";
import { ClientKeyboardController } from "@/components/utils/ClientKeyboardController";
import { getCssText, globalCss, styled } from "@/utils/styling";
import { contents } from "@/utils/contents";
import { Meme } from "@/components/Meme";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const globalStyles = globalCss({
  "body, html": {
    margin: 0,
    padding: 0,
    ...bebas.style,
  },

  "*, *:before, *:after": {
    boxSizing: "border-box",
  },

  ".marker": {
    ...marker.style,
  },

  ".sans": {
    ...openSans.style,
  },

  ".mono": {
    ...sourceCodePro.style,
  },
});

const Container = styled("div", {
  position: "fixed",
  inset: 0,
  background: "$wall",
});

export const metadata: Metadata = {
  title:
    "An Introduction to Server Components & the Future of Web DevelopmentAn Introduction to Server Components and the Future of Web Rendering - Talk by Julian Burr @ DDD Perth '24",
};

export default function RootLayout() {
  globalStyles();
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <Container>
          <Desk />
          <Books contents={contents} />
          <Plant contents={contents} />

          <Computer contents={contents} />
          <Title />
          <Meme />

          <Coffee contents={contents} />
        </Container>

        <ClientKeyboardController max={contents.length - 1} />
      </body>
    </html>
  );
}
