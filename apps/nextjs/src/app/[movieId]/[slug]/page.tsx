import { Suspense } from "react";

import { MovieDetails } from "@/components/MovieDetails";

export default function DetailsPage({ searchParams, params }: any) {
  return (
    <Suspense fallback={<MovieDetails loading />}>
      <MovieDetails searchTerm={searchParams.q} movieId={params?.movieId} />
    </Suspense>
  );
}
