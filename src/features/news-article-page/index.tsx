import { crimsonPro } from "@/fonts";
import styles from "./news-article-page.module.scss";

export const NewsArticlePage = () => {
  return (
    <main className={styles["main"]}>
      <section className={styles["banner"]}>
        <h1 className={crimsonPro.className}>
          New Zealanders’ Perceptions of Emerging Technologies: Governance,
          Ethics, Security and Risks
        </h1>
      </section>
      <section className={styles["news"]}>
        <h2>Merhaba</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sit
          vero odio aut quod suscipit quasi, minus atque optio explicabo numquam
          nobis iure cupiditate sapiente? Enim, neque cum. Voluptatem,
          temporibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis earum, quia laborum mollitia architecto laudantium delectus.
          Quo itaque nam, officiis dicta sunt placeat illum, aut accusamus atque
          rem alias quia dolore? Neque, sequi dolorum officiis suscipit et
          officia doloribus asperiores. Quisquam, quae. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quisquam, quae.
        </p>
      </section>
    </main>
  );
};
