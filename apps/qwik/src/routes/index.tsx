import { Resource, component$, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, useLocation, useNavigate } from "@builder.io/qwik-city";
import { Icon } from "qwik-feather-icons";
import slugify from "slugify";

import { fetchList } from "@workspace/shared/data/fetchList";

export default component$(() => {
  const loc = useLocation();
  const nav = useNavigate();

  const list = useResource$(async ({ track }) => {
    track(() => loc.url.searchParams.get("q"));

    const items = await fetchList(loc.url.searchParams.get("q") as string);
    return items;
  });

  const searchTerm = loc.url.searchParams.get("q") as string;

  return (
    <div class="p-4 sm:p-12 w-full h-full max-w-[880px] self-center">
      <div class="flex flex-col items-center sm:flex-row bg-red gap-2 sm:gap-8">
        <h1 class="font-brand ">Notflix</h1>
        <div class="p-3 rounded-md bg-gray-200 w-full flex flex-row items-center gap-2 focus-within:outline">
          <Icon name="search" class="h-4" />
          <input
            type="text"
            name="q"
            value={searchTerm}
            onKeyDown$={(e: any) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                nav(`/?q=${encodeURIComponent(e.target.value)}`);
              }
            }}
            placeholder="Search movies..."
            class="w-full bg-transparent focus:outline-none"
            style={{ background: "transparent" }}
          />
        </div>
      </div>

      <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
        <Resource
          value={list}
          onPending={() => (
            <>
              {/**
               * NOTE: the `onPending` fallback currently doesn't render during SSR
               * see https://github.com/BuilderIO/qwik/issues/4328
               */}
              {Array.from(new Array(8)).map((_, i) => (
                <div
                  key={i}
                  class="w-full aspect-[11/16] rounded-md bg-gray-200 animate-pulse"
                />
              ))}
            </>
          )}
          onResolved={(items) => (
            <>
              {items.map((item: any) => {
                const id = item?.["#IMDB_ID"];
                const title = item?.["#TITLE"];
                const year = item?.["#YEAR"];
                const poster = item?.["#IMG_POSTER"];

                const titleSlug = slugify(title, {
                  strict: true,
                  lower: true,
                });

                return (
                  <Link
                    key={id}
                    href={`/${id}/${titleSlug}?q=${encodeURIComponent(searchTerm)}`}
                    class="w-full aspect-[11/16] bg-gray-200 rounded-md focus:outline-white hover:scale-110 focus:scale-110 transition-all overflow-hidden relative z-10 hover:z-20 focus:z-20 group"
                  >
                    <img
                      src={poster}
                      alt={title}
                      class="w-full h-full object-cover"
                    />

                    <div class="absolute bottom-[-1px] left-[-1px] right-[-1px] top-[-1px] p-4 bg-gradient-to-t from-black/90 via-50% z-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all">
                      <h2 class="leading-tight font-bold">{title}</h2>
                      <p class="text-sm text-white/70">{year}</p>
                    </div>
                  </Link>
                );
              })}
            </>
          )}
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik | Notflix",
};
