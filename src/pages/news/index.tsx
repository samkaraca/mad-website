import { NewsPage } from "@/features/news-page";
import Head from "next/head";

export default function News() {
  return (
    <>
      <Head>
        <title>News - Management, Analytics, Decision Making</title>
      </Head>
      <NewsPage />
    </>
  );
}
