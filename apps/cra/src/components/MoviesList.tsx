import { Link } from "react-router-dom";
import slugify from "slugify";

import type { MovieListItem } from "@workspace/shared/data/fetchList";

type Props = {
  loading?: boolean;
  items?: MovieListItem[];
  searchTerm?: string;
};

function MoviesList({ loading, items, searchTerm }: Props) {
  if (loading) {
    return (
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
        {Array.from(new Array(8)).map((_, i) => (
          <div
            key={i}
            className="w-full aspect-[11/16] rounded-md bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
      {items?.map?.((item: any) => {
        const id = item?.["#IMDB_ID"];
        const title = item?.["#TITLE"];
        const year = item?.["#YEAR"];
        const poster = item?.["#IMG_POSTER"];

        const titleSlug = slugify(title, { strict: true, lower: true });

        return (
          <Link
            to={
              searchTerm
                ? `/${id}/${titleSlug}?q=${encodeURIComponent(searchTerm)}`
                : `/${id}/${titleSlug}`
            }
            className="w-full aspect-[11/16] bg-gray-200 rounded-md focus:outline-white hover:scale-110 focus:scale-110 transition-all overflow-hidden relative z-10 hover:z-20 focus:z-20 group"
          >
            <img
              src={poster}
              alt={title}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-[-1px] left-[-1px] right-[-1px] top-[-1px] p-4 bg-gradient-to-t from-black/90 via-50% z-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all">
              <h2 className="leading-tight font-bold">{title}</h2>
              <p className="text-sm text-white/70">{year}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export { MoviesList };
