import path from "path";
import { promises as fs } from "fs";
import { INewsCard } from "@/types/news-card";

export const readFile = async (
  relativePath: string
): Promise<string | undefined> => {
  let dataString = undefined;

  try {
    const fullPath = path.join(process.cwd(), relativePath);
    dataString = await fs.readFile(fullPath, "utf8");
  } catch (error) {
    console.error("Error reading file:", error);
  }

  return dataString;
};

export const readNews = async (): Promise<INewsCard[]> => {
  let news = [];
  const newsJsonString = await readFile("public/db/news.json");

  if (newsJsonString) {
    news = JSON.parse(newsJsonString);
  }

  return news;
};

export const readHtml = async (relativePath: string): Promise<string> => {
  const htmlFileString = await readFile(relativePath);

  if (htmlFileString) {
    return htmlFileString;
  }

  const defaultHtmlString = await readFile("public/html/default.html");

  return defaultHtmlString || "";
};
