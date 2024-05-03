import { NewsArticlePage } from "@/features/news-article-page";
import Head from "next/head";
import { INewsCard } from "@/types/news-card";
import { readHtml, readNews } from "@/utils/read-file";

export async function getStaticPaths() {
  return {
    paths: (await readNews()).map((news) => {
      return {
        params: {
          news: news.fileName,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const newsHtmlFileName = context.params.news;

  const newsJson = await readNews();
  const newsHtml = await readHtml(`public/html/${newsHtmlFileName}`);
  const news = newsJson.find((news: any) => news.fileName === newsHtmlFileName);

  return {
    props: {
      news: news || {},
      htmlContent: newsHtml,
    },
  };
}

export default function NewsArticle({
  news,
  htmlContent,
}: {
  news: INewsCard;
  htmlContent: string;
}) {
  const { title, image, description } = news;

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={image ? image : "/open-graph/news-page/news191-100.jpg"}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <title>{title}</title>
      </Head>
      <NewsArticlePage news={news} htmlContent={htmlContent} />
    </>
  );
}
