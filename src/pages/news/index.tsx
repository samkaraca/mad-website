import { NewsPage } from "@/features/news-page";
import Head from "next/head";

export default function News() {
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
      <NewsPage />
    </>
  );
}
