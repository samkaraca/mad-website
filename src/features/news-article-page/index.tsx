import styles from "./news-article-page.module.scss";
import { INewsCard } from "@/types/news-card";
import { DefaultBanner } from "@/components/default-banner";

export const NewsArticlePage = ({
  news,
  htmlContent,
}: {
  news: INewsCard;
  htmlContent: string;
}) => {
  return (
    <main className={styles["main"]}>
      <DefaultBanner title={news.title} className={styles["banner"]} />
      <section
        className={styles["news"]}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></section>
    </main>
  );
};
