import { contents } from "@/utils/contents";

function useServerSlide(s?: string) {
  const slide = s ? parseInt(s) : 0;
  const c = contents?.[slide]!;
  return { ...c, slide };
}

export { useServerSlide };
