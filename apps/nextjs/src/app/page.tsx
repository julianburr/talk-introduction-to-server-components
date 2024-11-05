import { Suspense } from "react";

import { MoviesList } from "@/components/MoviesList";
import { Header } from "@/components/Header";

async function ListPage({ searchParams }: any) {
  const searchTerm: string = searchParams?.["q"] || "";
  return (
    <div className="p-4 sm:p-12 w-full h-full max-w-[880px] self-center">
      <Header searchTerm={searchTerm} />
      <Suspense key={searchTerm} fallback={<MoviesList loading />}>
        <MoviesList searchTerm={searchTerm} />
      </Suspense>
    </div>
  );
}

export default ListPage;
