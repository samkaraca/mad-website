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
        </div>
        <ul className={styles["news-container"]}>
          <NewsCard
            vertical
            link="/news/1"
            title="MAD’s New Website"
            date="12/12/2021"
            text="Developing a Questionnaire to Gauge Public Perceptions of Emerging Technologies: Socio-technical representations of key New Zealand stakeholders."
          />
          <NewsCard
            vertical
            link="/news/1"
            title="MAD’s New Website"
            date="12/12/2021"
            text="Developing a Questionnaire to Gauge Public Perceptions of Emerging Technologies: Socio-technical representations of key New Zealand stakeholders."
          />
          <NewsCard
            vertical
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

// const NewsCard = () => {
//   return (
//     <li>
//       <article className={styles["news-card"]}>
//         <img src="https://via.placeholder.com/150" alt="" />
//         <section className={`${styles["texts"]}`}>
//           <h2 className={`bottom-line ${crimsonPro.className}`}>
//             News Title Bakalım Ne Olacak
//           </h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
//             aspernatur? Repudiandae vero, quia mollitia in velit ratione
//             suscipit delectus exercitationem soluta quam, assumenda rerum. Ipsum
//             ab temporibus eos deserunt dignissimos?
//           </p>
//         </section>
//       </article>
//     </li>
//   );
// };
