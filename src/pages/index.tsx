import Head from "next/head";
import { Inter } from "next/font/google";
import { HomePage } from "@/features/home-page";
import path from "path";
import { promises as fs } from "fs";
import { INewsCard } from "@/types/news-card";

const inter = Inter({ subsets: ["latin"] });

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
