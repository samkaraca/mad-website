import { crimsonPro } from "@/fonts";
import styles from "./latest-news.module.scss";
import { useState } from "react";

export const LatestNews = () => {
  return (
    <section className={styles["latest-news"]}>
      <h3 className={`section-title`}>THE LATEST FROM MAD</h3>
      <section className={styles["news-cards"]}>
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
    <a
      href={link}
      className={`${styles["news-card"]} ${link ? styles["clickable"] : ""}`}
    >
      <img src={img ? img : "/placeholder.jpg"} alt="" />
      <section className={styles["content"]}>
        <h4 className={crimsonPro.className}>{title}</h4>
        {date && (
          <section className={styles["date"]} aria-label="date">
            <img src="/calendar.svg" alt="calendar icon" />
            <p>{date}</p>
          </section>
        )}
        <p>{text}</p>
      </section>
    </a>
  );
};
