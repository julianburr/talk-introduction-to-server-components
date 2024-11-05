import { Resource, component$, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, useLocation } from "@builder.io/qwik-city";
import { Icon } from "qwik-feather-icons";
import markdown from "markdown-it";
import moment from "moment";

import { fetchMovie } from "@workspace/shared/data/fetchMovie";
import { LikeButton } from "~/components/LikeButton";

const md = markdown();

export default component$(() => {
  const loc = useLocation();

  const data = useResource$(async ({ track }) => {
    track(() => loc.params.movieId);

    const data = await fetchMovie(loc.params.movieId as string);
    return data;
  });

  const searchTerm = loc.url.searchParams.get("q") as string;

  return (
    <div class="sm:p-12 w-full max-w-[880px] h-full sm:h-[100svh] flex flex-col self-center">
      <Resource
        value={data}
        onPending={() => (
          <div
            class={
              "w-full h-full sm:overflow-hidden sm:rounded-md flex flex-col bg-gray-100 sm:bg-gray-200 animate-pulse"
            }
          >
            <div class="flex flex-col sm:flex-row sm:flex-1 sm:h-full w-full overflow-hidden">
              <div class="flex flex-col w-full sm:h-full bg-gray-100/50 relative">
                <div class="absolute top-4 left-4">
                  <Link
                    href={`/?q=${encodeURIComponent(searchTerm)}`}
                    class="bg-white/70 hover:bg-white focus:bg-white transition-all text-black w-10 h-10 flex items-center justify-center rounded-full shadow-gray-100 shadow-[0_0_40px_0]"
                  >
                    <Icon name="arrow-left" class="h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        onResolved={(movie) => (
          <div class="w-full h-full sm:overflow-hidden sm:rounded-md flex flex-col bg-gray-100 sm:bg-gray-200">
            <div class="flex flex-col sm:flex-row sm:flex-1 sm:h-full w-full overflow-hidden">
              <div class="flex flex-col w-full sm:h-full bg-gray-100/50 relative">
                <div class="absolute top-4 left-4 right-4 flex flex-row justify-between">
                  <Link
                    href={`/?q=${encodeURIComponent(searchTerm)}`}
                    class="bg-white/70 hover:bg-white focus:bg-white transition-all text-black w-10 h-10 flex items-center justify-center rounded-full shadow-gray-100 shadow-[0_0_40px_0]"
                  >
                    <Icon name="arrow-left" class="h-4" />
                  </Link>
                  <LikeButton movieId={movie.imdbId} />
                </div>

                <img
                  src={movie.short.image}
                  alt={movie.short.name}
                  class="w-full aspect-[4/5] sm:aspect-auto sm:h-full object-cover"
                />

                <div class="absolute p-6 pt-20 bottom-0 left-0 right-0 bg-gradient-to-t from-gray-100 sm:from-black">
                  <h1 class="text-2xl font-bold leading-tight text-balance">
                    {movie.top.titleText.text}
                  </h1>
                  <div class="mt-2 text-sm text-white/70 flex flex-col">
                    <span>
                      {[
                        movie.short.datePublished
                          ? moment(movie.short.datePublished).format("YYYY")
                          : undefined,
                        movie.top.runtime?.displayableProperty?.value
                          ?.plainText,
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    </span>
                    <span>{movie.short.genre?.join(", ")}</span>
                  </div>
                </div>
              </div>

              <div class="flex flex-col h-full w-full p-6 sm:overflow-auto">
                <div
                  dangerouslySetInnerHTML={md.render(
                    movie.top.plot?.plotText.plainText || ""
                  )}
                />

                {!!movie.short.director?.length && (
                  <div class="mt-4">
                    <p class="uppercase font-bold text-xs text-white/70">
                      {movie.short.director.length > 1
                        ? "Directors"
                        : "Director"}
                    </p>
                    <p>
                      {movie.short.director
                        .map((person: any) => person?.name)
                        .join(", ")}
                    </p>
                  </div>
                )}

                {!!movie.short.actor?.length && (
                  <div class="mt-4">
                    <p class="uppercase font-bold text-xs text-white/70">
                      Cast
                    </p>
                    <p>
                      {movie.short.actor
                        .map((person: any) => person?.name)
                        .join(", ")}
                    </p>
                  </div>
                )}

                {movie.short.review?.reviewBody && (
                  <div class="mt-4">
                    <p class="uppercase font-bold text-xs text-white/70">
                      Review:{" "}
                      <span dangerouslySetInnerHTML={movie.short.review.name} />
                    </p>
                    <div
                      dangerouslySetInnerHTML={movie.short.review.reviewBody}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik | Notflix",
};
