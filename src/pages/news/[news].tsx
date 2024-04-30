import { NewsArticlePage } from "@/features/news-article-page";
import Head from "next/head";

export default function DynamicNews() {
  return (
    <>
      <Head>
        <title>News - Management, Analytics, Decision Making</title>
      </Head>
      <NewsArticlePage />
    </>
  );
}
