import { NewsArticlePage } from "@/features/news-article-page";
import Head from "next/head";

export default function DynamicNews({
  title,
  image,
}: {
  title: string;
  image?: string;
}) {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={image ? image : "/open-graph/news-page/news191-100.jpg"}
        />
        <meta property="og:title" content={title} />
        <title>{title}</title>
      </Head>
      <NewsArticlePage />
    </>
  );
}
