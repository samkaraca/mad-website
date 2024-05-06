import path from "path";
import { promises as fs } from "fs";
import { INewsCard } from "@/types/news-card";
import { IPersonCard } from "@/types/person-card";
import { IOutput } from "@/types/output";
import { ICourse } from "@/types/course";
import { IGrant } from "@/types/grant";

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

export const readJsonArray = async (relativePath: string): Promise<any[]> => {
  let array = [];
  const jsonString = await readFile(relativePath);

  try {
    const parsedJson = jsonString && JSON.parse(jsonString);

    if (Array.isArray(parsedJson)) {
      array = parsedJson;
    }
  } catch (error) {
    console.error("Error parsing JSON array:", error);
  }

  return array;
};

export const readNews = async (): Promise<INewsCard[]> => {
  return await readJsonArray("public/db/news.json");
};

export const readPeople = async (): Promise<IPersonCard[]> => {
  return await readJsonArray("public/db/people.json");
};

export const readOutputs = async (): Promise<IOutput[]> => {
  return await readJsonArray("public/db/outputs.json");
};

export const readCourses = async (): Promise<ICourse[]> => {
  return await readJsonArray("public/db/courses.json");
};

export const readGrants = async (): Promise<IGrant[]> => {
  return await readJsonArray("public/db/grants.json");
};

export const readHtml = async (relativePath: string): Promise<string> => {
  const htmlFileString = await readFile(relativePath);

  if (htmlFileString) {
    return htmlFileString;
  }

  const defaultHtmlString = await readFile("public/html/default.html");

  return defaultHtmlString || "";
};
