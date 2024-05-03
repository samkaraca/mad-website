import styles from "./news-page.module.scss";
import { NewsCard } from "@/components/news-card";
import { INewsCard } from "@/types/news-card";
import { DefaultBanner } from "@/components/default-banner";

export const NewsPage = ({ news }: { news: INewsCard[] }) => {
  return (
    <main id="main" className={styles["main"]}>
      <section aria-label="All news from MAD group" className={styles["news"]}>
        <DefaultBanner title="News" />
        <ul className={styles["news-list"]}>
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
    </main>
  );
};
