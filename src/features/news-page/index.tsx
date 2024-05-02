import { crimsonPro } from "@/fonts";
import styles from "./news-page.module.scss";
import { NewsCard } from "@/components/news-card";

export const NewsPage = () => {
  return (
    <main id="main" className={styles["main"]}>
      <section aria-labelledby="news-heading" className={styles["news"]}>
        <div className={styles["banner"]} aria-label="News Banner">
          <h1 id="news-heading" className={crimsonPro.className}>
            News
          </h1>
          <img src="/default-bg-2.svg" alt="Banner" />
        </div>
        <ul className={styles["news-container"]}>
          <NewsCard
            className={styles["news-card"]}
            link="/news/1"
            title="MAD’s New Website"
            date="12/12/2021"
            text="Developing a Questionnaire to Gauge Public Perceptions of Emerging Technologies: Socio-technical representations of key New Zealand stakeholders."
          />
          <NewsCard
            className={styles["news-card"]}
            link="/news/1"
            title="MAD’s New Website"
            date="12/12/2021"
            text="Developing a Questionnaire to Gauge Public Perceptions of Emerging Technologies: Socio-technical representations of key New Zealand stakeholders."
          />
          <NewsCard
            className={styles["news-card"]}
            link="/news/1"
            title="MAD’s New Website"
            date="12/12/2021"
            text="Developing a Questionnaire to Gauge Public Perceptions of Emerging Technologies: Socio-technical representations of key New Zealand stakeholders."
          />
        </ul>
      </section>
    </main>
  );
};
