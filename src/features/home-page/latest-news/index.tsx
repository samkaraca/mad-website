import { INewsCard } from "@/types/news-card";
import styles from "./latest-news.module.scss";
import { NewsCard } from "@/components/news-card";
import { lato } from "@/fonts";

export const LatestNews = ({ news }: { news: INewsCard[] }) => {
  return (
    <section
      aria-label="Latest news from MAD group"
      className={styles["latest-news"]}
    >
      <h3 className={`${lato.className} section-title`}>THE LATEST FROM MAD</h3>
      <ul className={styles["news-cards"]}>
        {news.map((newsItem) => {
          return (
            <NewsCard
              key={newsItem.fileName}
              className={styles["news-card"]}
              link={`/news/${newsItem.fileName}`}
              title={newsItem.title}
              date={newsItem.date}
              text={newsItem.description}
              img={newsItem.image}
            />
          );
        })}
      </ul>
    </section>
  );
};
