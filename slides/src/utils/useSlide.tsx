import { useParams } from "next/navigation";

function useSlide(contents?: any) {
  const params = useParams();

  const s = params.slide as string;
  const slide = s ? parseInt(s) : 0;

  const c = contents?.[slide] || {};

  return { ...c, slide };
}

export { useSlide };
