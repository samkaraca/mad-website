import { NewsPage } from "@/features/news-page";
import Head from "next/head";
import path from "path";
import { promises as fs } from "fs";
import { INewsCard } from "@/types/news-card";

export async function getStaticProps() {
  const newsHtmlPath = path.join(process.cwd(), `public/db/news.json`);
  const newsJsonString = await fs.readFile(newsHtmlPath, "utf8");
  const news = JSON.parse(newsJsonString);

  return {
    props: {
      news,
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
