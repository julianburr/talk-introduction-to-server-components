"use client";

import { useEffect, useRef, useState } from "react";
import { styled } from "@/utils/styling";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  background: "$screen",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "3vh",
  textAlign: "center",
  transition: "background .4s",

  '&[data-loading="true"]': {
    background: "black",

    "& *": {
      display: "none",
    },
  },
});

export function Screen({ era, children }: any) {
  const [loading, setLoading] = useState(false);
  const [showChildren, setShowChildren] = useState(children);

  const timer = useRef<NodeJS.Timeout>();
  const lastEra = useRef(era);

  useEffect(() => {
    clearTimeout(timer.current);
    if (lastEra.current !== era) {
      setLoading(true);
      lastEra.current = era;
      timer.current = setTimeout(() => {
        setShowChildren(children);
        setLoading(false);
      }, 600);
    } else {
      setShowChildren(children);
      setLoading(false);
    }
  }, [era, children]);

  return <Container data-loading={loading}>{showChildren}</Container>;
}
