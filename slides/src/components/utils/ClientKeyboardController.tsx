"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

function ClientKeyboardController({ max }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const s = searchParams.get("slide") as string;
  const slide = s ? parseInt(s) : 0;
  const setSlide = useCallback(
    (val: number) => {
      router.push(`${pathname}?slide=${val}`);
    },
    [router, pathname]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("handleKeyDown", { e });
      if (e.key === "ArrowLeft") {
        setSlide(Math.max(slide - 1, 0));
      } else if (e.key === "ArrowRight" || e.key === " ") {
        setSlide(Math.min(slide + 1, max));
      } else if (e.key === "b") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
          document.body.classList.add("hide-cursor");
        } else if (document.exitFullscreen) {
          document.exitFullscreen();
          document.body.classList.remove("hide-cursor");
        }
      }
    };

    const handleClick = (e: any) => {
      if (e.target?.tag?.toLowerCase() !== "a") {
        setSlide(Math.min(slide + 1, max));
      }
    };

    window.document.body.addEventListener("keydown", handleKeyDown);
    window.document.body.addEventListener("click", handleClick);
    return () => {
      window.document.body.removeEventListener("keydown", handleKeyDown);
      window.document.body.removeEventListener("click", handleClick);
    };
  }, [setSlide, slide, max]);

  return null;
}

export { ClientKeyboardController };
