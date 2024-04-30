import styles from "./latest-news.module.scss";

export const LatestNews = () => {
  return (
    <section className={styles["latest-news"]}>
      <h3 className="section-title">THE LATEST FROM MAD</h3>
      <section className={styles["news-cards"]}>
        <NewsCard
          img="https://via.placeholder.com/150"
          title="MAD’s New Website"
          text="We are excited to announce the launch of our new website!"
        />
        <NewsCard
          img="https://via.placeholder.com/150"
          title="MAD’s New Website"
          text="We are excited to announce the launch of our new website!"
        />
        <NewsCard
          img="https://via.placeholder.com/150"
          title="MAD’s New Website"
          text="We are excited to announce the launch of our new website!"
        />
      </section>
    </section>
  );
};

const NewsCard = ({
  img,
  title,
  text,
}: {
  img: string;
  title: string;
  text: string;
}) => {
  return (
    <section className={styles["news-card"]}>
      <img src={img} alt="" />
      <section className={styles["content"]}>
        <h4>{title}</h4>
        <p>{text}</p>
      </section>
    </section>
  );
};
