import { Suspense } from "react";

import { MovieDetails } from "@/components/MovieDetails";

import { fetchMovie } from "@workspace/shared/data/fetchMovie";

async function DetailsContent({ searchParams, movieId }: any) {
  const movie = await fetchMovie(movieId);
  return <MovieDetails searchTerm={searchParams} movie={movie} />;
}

export default function DetailsPage({ searchParams, params }: any) {
  return (
    <Suspense fallback={<MovieDetails loading />}>
      <DetailsContent searchTerm={searchParams.q} movieId={params?.movieId} />
    </Suspense>
  );
}
