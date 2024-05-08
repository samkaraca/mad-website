import { INewsCard } from "@/types/news-card";
import styles from "./latest-news.module.scss";
import { NewsCard } from "@/components/news-card";
import { lato } from "@/fonts";
import Link from "next/link";

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
              key={newsItem.link}
              className={styles["news-card"]}
              newsCard={newsItem}
            />
          );
        })}
      </ul>
      <Link className={styles["see-all-news-link"]} href="/news">
        See all news from MAD group...
      </Link>
    </section>
  );
};
