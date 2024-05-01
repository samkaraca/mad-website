import { crimsonPro, lato } from "@/fonts";
import styles from "./latest-news.module.scss";

export const LatestNews = () => {
  return (
    <section
      aria-labelledby="news-list-heading"
      className={styles["latest-news"]}
    >
      <h3 id="news-list-heading" className={`section-title ${lato.className}`}>
        THE LATEST FROM MAD
      </h3>
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

const NewsCard = ({
  img,
  title,
  text,
  date,
  link,
}: {
  img?: string;
  title: string;
  text: string;
  date?: string;
  link?: string;
}) => {
  return (
    <li>
      <a
        href={link}
        className={`${styles["news-card"]} ${link ? styles["clickable"] : ""}`}
      >
        <img src={img ? img : "/placeholder.jpg"} alt="" />
        <div className={styles["content"]}>
          <h4 className={crimsonPro.className}>{title}</h4>
          {date && (
            <div className={styles["date"]}>
              <img src="/icons/calendar.svg" alt="calendar icon" />
              <p>{date}</p>
            </div>
          )}
          <p>{text}</p>
        </div>
      </a>
    </li>
  );
};
