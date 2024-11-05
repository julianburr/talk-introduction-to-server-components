import { Monitor } from "@/components/computer/Monitor";
import { Screen } from "@/components/computer/Screen";
import { Tower } from "@/components/computer/Tower";
import { Keyboard } from "@/components/computer/Keyboard";
import { Mouse } from "@/components/computer/Mouse";
import { useServerSlide } from "@/utils/useServerSlide";

type Props = {
  slide?: string;
};

export function Computer({ slide }: Props) {
  const s = useServerSlide(slide);
  return (
    <>
      <Monitor era={s.era}>
        <Screen era={s.era}>{"content" in s && s.content}</Screen>
      </Monitor>

      <Tower era={s.era} />
      <Keyboard era={s.era} />
      <Mouse era={s.era} />
    </>
  );
}
