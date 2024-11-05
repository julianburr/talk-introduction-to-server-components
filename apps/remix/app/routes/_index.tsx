import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useNavigate, useSearchParams } from "@remix-run/react";

import { MovieListItem, fetchList } from "@workspace/shared/data/fetchList.js";

import { MoviesList } from "~/components/MoviesList.tsx";

export const meta: MetaFunction = () => {
  return [{ title: "Remix | Notflix" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") as string;
  const items = await fetchList(q);
  return items;
}

export default function Index() {
  const nav = useNavigate();

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") as string;

  const items = useLoaderData<MovieListItem[]>();

  return (
    <MoviesList
      items={items}
      searchTerm={searchTerm}
      setSearchTerm={(q) => nav(`/?q=${encodeURIComponent(q)}`)}
    />
  );
}
