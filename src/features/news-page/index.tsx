import styles from "./news-page.module.scss";
import { NewsCard } from "@/components/news-card";
import { INewsCard } from "@/types/news-card";
import { DefaultBanner } from "@/components/default-banner";
import { DefaultCardGrid } from "@/components/default-card-grid";

export const NewsPage = ({ news }: { news: INewsCard[] }) => {
  return (
    <main id="main" className={styles["main"]}>
      <section aria-label="All news from MAD group" className={styles["news"]}>
        <DefaultBanner title="News" />
        <DefaultCardGrid>
          {news.map((newsItem, i) => {
            return (
              <NewsCard
                key={i}
                className={styles["news-card"]}
                newsCard={newsItem}
              />
            );
          })}
        </DefaultCardGrid>
      </section>
    </main>
  );
};
