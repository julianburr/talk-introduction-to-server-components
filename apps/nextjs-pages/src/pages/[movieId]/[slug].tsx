/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

import { fetchMovie } from "@workspace/shared/data/fetchMovie";

import { MovieDetails } from "@/components/MovieDetails";

export default function DetailsPage({ movie }: any) {
  const { query } = useRouter();
  return <MovieDetails movie={movie} searchTerm={query.q as string} />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      movie: await fetchMovie(ctx.params?.movieId as string),
    },
  };
}
