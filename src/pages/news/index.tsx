import { NewsPage } from "@/features/news-page";
import Head from "next/head";
import { INewsCard } from "@/types/news-card";
import { readNews } from "@/utils/read-file";

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
          content="Latest News and Updates - MAD Research Group"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest news and developments from the MAD research group at Massey University. Find announcements, project updates, and highlights from our team's research and academic accomplishments."
        />
        <meta
          property="og:image"
          content="/open-graph/news-page/news191-100.jpg"
        />
        <meta
          property="og:image:alt"
          content="Word 'News' in white serif font on a dark blue background with white curved lines."
        />
        <title>News | MAD Research Group</title>
      </Head>
      <NewsPage news={news} />
    </>
  );
}
