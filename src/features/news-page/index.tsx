import { crimsonPro } from "@/fonts";
import styles from "./news-page.module.scss";

export const NewsPage = () => {
  return (
    <main id="main" className={styles["main"]}>
      <section className={styles["banner"]} aria-label="News Banner">
        <h1 className={crimsonPro.className}>News</h1>
      </section>
      <section className={styles["news-container"]}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
    </main>
  );
};

const NewsCard = () => {
  return (
    <article className={styles["news-card"]}>
      <img src="https://via.placeholder.com/150" alt="" />
      <section className={`${styles["texts"]}`}>
        <h2 className={`bottom-line ${crimsonPro.className}`}>
          News Title Bakalım Ne Olacak
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
          aspernatur? Repudiandae vero, quia mollitia in velit ratione suscipit
          delectus exercitationem soluta quam, assumenda rerum. Ipsum ab
          temporibus eos deserunt dignissimos?
        </p>
      </section>
    </article>
  );
};
