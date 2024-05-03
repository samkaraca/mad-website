import Head from "next/head";
import { HomePage } from "@/features/home-page";
import { INewsCard } from "@/types/news-card";
import { readNews } from "@/utils/read-file";

export async function getStaticProps() {
  return {
    props: {
      news: (await readNews()).slice(0, 3),
    },
  };
}

export default function Home({ news }: { news: INewsCard[] }) {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Massey Unviersity - Management, Analytics, and Decision Making"
        />
        <meta
          property="og:description"
          content="Meet the MAD research group from Massey University, exploring the human impact of business computing."
        />
        <meta
          property="og:image"
          content="/open-graph/home-page/massey191-100.jpg"
        />
        <meta property="og:image:alt" content="The logo of Massey University" />
        <title>MAD - Management Analytics Decision Making</title>
      </Head>
      <HomePage news={news} />
    </>
  );
}
