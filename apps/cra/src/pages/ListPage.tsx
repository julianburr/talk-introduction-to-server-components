import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchList } from "@workspace/shared/data/fetchList";

import { MoviesList } from "../components/MoviesList";
import { Header } from "../components/Header";

type State = {
  loading: boolean;
  data: any[];
};

function ListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  const [list, setList] = useState<State>({
    loading: true,
    data: [],
  });

  useEffect(() => {
    if (!searchTerm) {
      setList({ loading: false, data: [] });
      return;
    }

    setList({ loading: true, data: [] });
    fetchList(searchTerm)
      .then((data) => setList((list) => ({ ...list, data })))
      .finally(() => setList((list) => ({ ...list, loading: false })));
  }, [searchTerm]);

  return (
    <div className="p-4 sm:p-12 w-full h-full max-w-[880px] self-center">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={(q) => setSearchParams({ q })}
      />
      <MoviesList
        loading={list.loading}
        items={list.data}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export { ListPage };
