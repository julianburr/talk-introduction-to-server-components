import { useRouter } from "next/router";
import type { GetServerSidePropsContext } from "next";

import { fetchList } from "@workspace/shared/data/fetchList";

import { Header } from "@/components/Header";
import { MoviesList } from "@/components/MoviesList";

export default function Home({ items, className }: any) {
  const router = useRouter();
  const searchTerm = router.query.q as string;
  return (
    <div
      className={`${className} p-4 sm:p-12 w-full h-full max-w-[880px] self-center`}
    >
      <Header
        searchTerm={searchTerm}
        setSearchTerm={(v) => router.push({ query: { q: v } })}
      />
      <MoviesList items={items} searchTerm={searchTerm} />
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      items: await fetchList(ctx.query.q as string),
    },
  };
}
