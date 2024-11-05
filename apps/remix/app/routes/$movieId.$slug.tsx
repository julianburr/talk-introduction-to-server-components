import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import { Movie, fetchMovie } from "@workspace/shared/data/fetchMovie.js";

import { MovieDetails } from "~/components/MovieDetails.tsx";

export const meta: MetaFunction = () => {
  return [{ title: "Remix | Notflix" }];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const movie = await fetchMovie(params.movieId);
  return movie;
}

export default function DetailsPage() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  const movie = useLoaderData<Movie>();

  return <MovieDetails movie={movie} searchTerm={searchTerm} />;
}
