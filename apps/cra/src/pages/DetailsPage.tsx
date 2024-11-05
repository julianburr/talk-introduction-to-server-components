import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { fetchMovie } from "@workspace/shared/data/fetchMovie";

import { MovieDetails } from "../components/MovieDetails";

type State = {
  loading: boolean;
  data: any;
};

function DetailsPage() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  const params = useParams();
  const id = params.movieId;

  const [movie, setMovie] = useState<State>({
    loading: true,
    data: null,
  });

  useEffect(() => {
    if (id) {
      setMovie({ loading: true, data: null });
      fetchMovie(id)
        .then((data) => setMovie((movie) => ({ ...movie, data })))
        .finally(() => setMovie((movie) => ({ ...movie, loading: false })));
    }
  }, [id]);

  return (
    <MovieDetails
      loading={movie.loading}
      movie={movie.data}
      searchTerm={searchTerm}
    />
  );
}

export { DetailsPage };
