import Link from "next/link";
import markdown from "markdown-it";
import moment from "moment";
import Icon from "feather-icons-react";

import { LikeButton } from "@/components/LikeButton";

import type { Movie } from "@workspace/shared/data/fetchMovie";

const md = markdown();

type Props = {
  loading?: boolean;
  searchTerm?: string;
  movie?: Movie;
};

function MovieDetails({ loading, searchTerm, movie }: Props) {
  if (loading) {
    return (
      <div className="sm:p-12 w-full max-w-[880px] h-full sm:h-[100svh] flex flex-col self-center">
        <div className="w-full h-full sm:overflow-hidden sm:rounded-md flex flex-col bg-gray-100 sm:bg-gray-200 animate-pulse">
          <div className="flex flex-col sm:flex-row sm:flex-1 sm:h-full w-full overflow-hidden">
            <div className="flex flex-col w-full sm:h-full bg-gray-100/50 relative">
              <div className="absolute top-4 left-4">
                <Link
                  href={
                    searchTerm ? `/?q=${encodeURIComponent(searchTerm)}` : "/"
                  }
                  className="bg-white/70 hover:bg-white focus:bg-white transition-all text-black w-10 h-10 flex items-center justify-center rounded-full shadow-gray-100 shadow-[0_0_40px_0]"
                >
                  <Icon icon="arrow-left" className="h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sm:p-12 w-full max-w-[880px] h-full sm:h-[100svh] flex flex-col self-center">
      <div className="w-full h-full sm:overflow-hidden sm:rounded-md flex flex-col bg-gray-100 sm:bg-gray-200">
        <div className="flex flex-col sm:flex-row sm:flex-1 sm:h-full w-full overflow-hidden">
          <div className="flex flex-col w-full sm:h-full bg-gray-100/50 relative">
            <div className="absolute top-4 left-4 right-4 flex flex-row justify-between">
              <Link
                href={
                  searchTerm ? `/?q=${encodeURIComponent(searchTerm)}` : "/"
                }
                className="bg-white/70 hover:bg-white focus:bg-white transition-all text-black w-10 h-10 flex items-center justify-center rounded-full shadow-gray-100 shadow-[0_0_40px_0]"
              >
                <Icon icon="arrow-left" className="h-4" />
              </Link>
              <LikeButton movieId={movie?.imdbId} />
            </div>

            <img
              src={movie?.short?.image}
              alt={movie?.short?.name}
              className="w-full aspect-[4/5] sm:aspect-auto sm:h-full object-cover"
            />

            <div className="absolute p-6 pt-20 bottom-0 left-0 right-0 bg-gradient-to-t from-gray-100 sm:from-black">
              <h1 className="text-2xl font-bold leading-tight text-balance">
                {movie?.top?.titleText?.text}
              </h1>
              <div className="mt-2 text-sm text-white/70 flex flex-col">
                <span>
                  {[
                    movie?.short?.datePublished
                      ? moment(movie?.short?.datePublished).format("YYYY")
                      : undefined,
                    movie?.top?.runtime?.displayableProperty?.value?.plainText,
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </span>
                <span>{movie?.short?.genre?.join(", ")}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full w-full p-6 sm:overflow-auto">
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(movie?.top?.plot?.plotText.plainText || ""),
              }}
            />

            {!!movie?.short?.director?.length && (
              <div className="mt-4">
                <p className="uppercase font-bold text-xs text-white/70">
                  {movie?.short?.director?.length > 1
                    ? "Directors"
                    : "Director"}
                </p>
                <p>
                  {movie?.short?.director
                    ?.map((person: any) => person?.name)
                    ?.join(", ")}
                </p>
              </div>
            )}

            {!!movie?.short?.actor?.length && (
              <div className="mt-4">
                <p className="uppercase font-bold text-xs text-white/70">
                  Cast
                </p>
                <p>
                  {movie?.short?.actor
                    ?.map((person: any) => person?.name)
                    ?.join(", ")}
                </p>
              </div>
            )}

            {!!movie?.short?.review?.reviewBody && (
              <div className="mt-4">
                <p className="uppercase font-bold text-xs text-white/70">
                  <span>Review: </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: movie?.short?.review?.name,
                    }}
                  />
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: md.render(movie?.short?.review?.reviewBody || ""),
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MovieDetails };
