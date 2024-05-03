import { NewsPage } from "@/features/news-page";
import Head from "next/head";
import { INewsCard } from "@/types/news-card";
import { readFile, readNews } from "@/utils/read-file";

export async function getStaticProps() {
  return {
    props: {
      news: await readNews(),
    },
  };
}

export default function News({ news }: { news: INewsCard[] }) {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="News - Management, Analytics, and Decision Making"
        />
        <meta property="og:description" content="Latest news from MAD group." />
        <meta
          property="og:image"
          content="/open-graph/news-page/news191-100.jpg"
        />
        <meta
          property="og:image:alt"
          content="Image with News title centered"
        />
        <title>News - Management, Analytics, Decision Making</title>
      </Head>
      <NewsPage news={news} />
    </>
  );
}
