"use client";

import storage from "localstorage-slim";

import "@workspace/shared/styles/like-button.css";

import { HeartSvg } from "./HeartSvg";
import { useEffect, useState } from "react";

type Props = {
  movieId?: string;
};

function LikeButton({ movieId }: Props) {
  const defaultChecked = storage?.get(`notflix/like/${movieId}`) === "true";

  // HACK: for whatever reason `defaultChecked` doesn't work as expected when this component is
  // being rendered both on the server and on the client, so we skip the render on the server here
  // in this convoluted way to avoid the "DOM doesn't match" hydration error :\
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button className="like-button bg-white/70 hover:bg-white focus:bg-white transition-all text-black w-10 h-10 flex items-center justify-center rounded-full shadow-gray-100 shadow-[0_0_40px_0]">
      <input
        key={`${defaultChecked}`}
        type="checkbox"
        className="checkbox"
        id={`checkbox-${movieId}`}
        defaultChecked={defaultChecked}
        onChange={(e) => {
          const val = e.target.checked ? "true" : "false";
          storage?.set(`notflix/like/${movieId}`, val);
        }}
      />
      <label htmlFor={`checkbox-${movieId}`}>
        <HeartSvg />
      </label>
    </button>
  );
}

export { LikeButton };
