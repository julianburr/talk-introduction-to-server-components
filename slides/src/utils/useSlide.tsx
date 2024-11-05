"use client";

import { useParams, useSearchParams } from "next/navigation";

function useSlide(contents?: any) {
  const searchParams = useSearchParams();

  const s = searchParams.get("slide") as string;
  const slide = s ? parseInt(s) : 0;

  const c = contents?.[slide] || {};

  return { ...c, slide };
}

export { useSlide };
