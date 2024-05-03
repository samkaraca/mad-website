import { NewsArticlePage } from "@/features/news-article-page";
import Head from "next/head";
import path from "path";
import { promises as fs } from "fs";
import { INewsCard } from "@/types/news-card";

export async function getStaticPaths() {
  let paths = [];

  try {
    const newsHtmlPath = path.join(process.cwd(), `public/db/news.json`);
    const jsonContent = await fs.readFile(newsHtmlPath, "utf8");
    const news = JSON.parse(jsonContent).map((news: any) => news.fileName);
    paths = news.map((fileName: string) => ({ params: { news: fileName } }));
  } catch (error) {
    console.error("Error reading news json file", error);
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const newsHtmlFileName = context.params.news;

  // Read the news html file
  let htmlContent = "";
  const newsHtmlPath = path.join(
    process.cwd(),
    `public/html/${newsHtmlFileName}`
  );
  const defaultNewsHtmlPath = path.join(
    process.cwd(),
    `public/html/default-news.html`
  );

  try {
    htmlContent = await fs.readFile(newsHtmlPath, "utf8");
  } catch (error) {
    console.error("Error reading news html file", error);
    try {
      htmlContent = await fs.readFile(defaultNewsHtmlPath, "utf8");
    } catch (error) {
      console.error("Error reading default news html file", error);
    }
  }

  // Get the title and image of the news
  let news = undefined;

  try {
    const newsJsonPath = path.join(process.cwd(), "public/db/news.json");
    const newsJsonString = await fs.readFile(newsJsonPath, "utf8");
    const newsJson = JSON.parse(newsJsonString);
    const theNewsJson = newsJson.find(
      (news: any) => news.fileName === newsHtmlFileName
    );
    if (newsJson) {
      news = theNewsJson;
    }
  } catch (error) {
    console.error("Error reading news json file", error);
  }

  return {
    props: {
      news: news ? news : {},
      htmlContent,
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
