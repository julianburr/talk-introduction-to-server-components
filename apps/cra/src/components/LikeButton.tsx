import storage from "localstorage-slim";

import "@workspace/shared/styles/like-button.css";

import { HeartSvg } from "./HeartSvg";

type Props = {
  movieId?: string;
};

function LikeButton({ movieId }: Props) {
  return (
    <button className="like-button bg-white/70 hover:bg-white focus:bg-white transition-all text-black w-10 h-10 flex items-center justify-center rounded-full shadow-gray-100 shadow-[0_0_40px_0]">
      <input
        type="checkbox"
        className="checkbox"
        id={`checkbox-${movieId}`}
        defaultChecked={storage?.get(`notflix/like/${movieId}`) === "true"}
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
