import "@workspace/shared/styles/like-button.css";

import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import storage from "localstorage-slim";

import { HeartSvg } from "./HeartSvg";

type Props = {
  movieId?: string;
};

const LikeButton = component$(({ movieId }: Props) => {
  const storageKey = `notflix/like/${movieId}`;

  const inputRef = useSignal<HTMLInputElement>();
  useVisibleTask$(() => {
    if (inputRef.value) {
      const defaultChecked = storage.get(storageKey) === "true";
      inputRef.value.checked = defaultChecked;
    }
  });

  return (
    <button class="like-button bg-white/70 hover:bg-white focus:bg-white transition-all text-black w-10 h-10 flex items-center justify-center rounded-full shadow-gray-100 shadow-[0_0_40px_0]">
      <input
        ref={inputRef}
        type="checkbox"
        class="checkbox"
        id={`checkbox-${movieId}`}
        onChange$={(e: any) => {
          const val = e.target.checked ? "true" : "false";
          storage.set(storageKey, val);
        }}
      />
      <label for={`checkbox-${movieId}`}>
        <HeartSvg />
      </label>
    </button>
  );
});

export { LikeButton };
