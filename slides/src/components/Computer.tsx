"use client";

import { Monitor } from "@/components/computer/Monitor";
import { Screen } from "@/components/computer/Screen";
import { Tower } from "@/components/computer/Tower";
import { Keyboard } from "@/components/computer/Keyboard";
import { Mouse } from "@/components/computer/Mouse";
import { useSlide } from "@/utils/useSlide";

export function Computer({ contents }: any) {
  const { era, content } = useSlide(contents);
  return (
    <>
      <Monitor era={era}>
        <Screen era={era}>{content}</Screen>
      </Monitor>

      <Tower era={era} />
      <Keyboard era={era} />
      <Mouse era={era} />
    </>
  );
}
