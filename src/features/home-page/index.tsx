import { crimsonPro } from "@/fonts";
import styles from "./home-page.module.scss";
import { LatestNews } from "./latest-news";
import { DefaultMainContainer } from "@/components/default-main-container";
import { INewsCard } from "@/types/news-card";

export const HomePage = ({ news }: { news: INewsCard[] }) => {
  return (
    <DefaultMainContainer
      image="/massey-building.jpg"
      imageAlt="Campus photo"
      title="Management, Analytics, and Decision Making"
    >
      <div className={styles["readable"]}>
        <section
          className={styles["welcome-text"]}
          aria-labelledby="welcome-to-mad-heading"
        >
          <h1
            id="welcome-to-mad-heading"
            className={`bottom-line ${crimsonPro.className}`}
          >
            Welcome to MAD
          </h1>
          <p>
            Professor David Pauleen, Dr. Nazim Taskin, A/Prof. Shane Scahill and
            Dr. Ali Intezari founded the special interest group called
            ‘Management, Analytics and Decision-Making’ (MAD) from the School of
            Management, Massey Business School at Massey University, which now
            includes Professor David Pauleen, Professor James Arrowsmith, Dr.
            Kasuni Weerasinghe, Dr. Shafiq Alam, Dr. Christine Tan, Dr. Gloria
            Liu, two PhD students, New Zealand, twenty former PhD students, and
            international associate members. The focus of our research is to
            understand the human dimension of community and business computing;
            the adoption and diffusion of technology within society and the
            effect of the digital divide.
          </p>
        </section>
        <LatestNews news={news} />
      </div>
    </DefaultMainContainer>
  );
};
