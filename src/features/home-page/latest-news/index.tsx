import styles from "./latest-news.module.scss";
import { NewsCard } from "@/components/news-card";

export const LatestNews = () => {
  return (
    <section
      aria-label="Latest news from MAD group"
      className={styles["latest-news"]}
    >
      <h3 className={`section-title`}>THE LATEST FROM MAD</h3>
      <ul className={styles["news-cards"]}>
        <NewsCard
          link="/news/1"
          title="MAD’s New Website"
          date="12/12/2021"
          text="Developing a Questionnaire to Gauge Public Perceptions of Emerging Technologies: Socio-technical representations of key New Zealand stakeholders."
        />
        <NewsCard
          img="https://via.placeholder.com/150"
          title="MAD’s New Website"
          text="We are excited to announce the launch of our new website!"
        />
        <NewsCard
          title="MAD’s New Website"
          text="We are excited to announce the launch of our new website!"
        />
      </ul>
    </section>
  );
};
