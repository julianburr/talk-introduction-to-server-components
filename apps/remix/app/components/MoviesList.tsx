import { Link } from "@remix-run/react";
import { Search } from "feather-icons-react";
import slugify from "slugify";

import { MovieListItem } from "@workspace/shared/data/fetchList.js";

type Props = {
  items?: MovieListItem[];
  searchTerm?: string;
  setSearchTerm?: (value: string) => any;
};

function MoviesList({ items, searchTerm, setSearchTerm }: Props) {
  return (
    <div className="p-4 sm:p-12 w-full h-full max-w-[880px] self-center">
      <div className="flex flex-col items-center sm:flex-row bg-red gap-2 sm:gap-8">
        <h1 className="font-brand">Notflix</h1>
        <div className="p-3 rounded-md bg-gray-200 w-full flex flex-row items-center gap-2 focus-within:outline">
          <Search className="h-4" />
          <input
            type="text"
            name="q"
            defaultValue={searchTerm}
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                setSearchTerm?.(e.target.value);
              }
            }}
            placeholder="Search movies..."
            className="w-full bg-transparent focus:outline-none"
            style={{ background: "transparent" }}
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
        {items?.map?.((item: any) => {
          const id = item?.["#IMDB_ID"];
          const title = item?.["#TITLE"];
          const year = item?.["#YEAR"];
          const poster = item?.["#IMG_POSTER"];

          const titleSlug = slugify(title, { strict: true, lower: true });

          return (
            <Link
              to={`/${id}/${titleSlug}?q=${encodeURIComponent(
                searchTerm || ""
              )}`}
              key={id}
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
    </div>
  );
}

export { MoviesList };
