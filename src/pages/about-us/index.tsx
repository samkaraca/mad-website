import { DefaultMainContainer } from "@/components/default-main-container";
import styles from "./about-us.module.scss";
import ProfileCard from "@/components/profile-card";
import { readPeople } from "@/utils/read-file";
import { IPersonCard } from "@/types/person-card";

export async function getStaticProps() {
  return {
    props: {
      people: await readPeople(),
    },
  };
}

export default function AboutUs({ people }: { people: IPersonCard[] }) {
  return (
    <DefaultMainContainer
      title="About Us"
      image="/about-us-bg.jpg"
      imageAlt="A group of people talking in an office"
    >
      <div className={styles["content"]}>
        <div className={styles["white-background"]}>
          <div className={styles["readable"]}>
            <section className={styles["welcome-text"]}>
              <h1 className={styles["bottom-line"]}>Meet Our Team</h1>
            </section>
            <div className={styles["profile-display"]}>
              {people.map((lecturer, index) => (
                <ProfileCard key={index} {...lecturer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DefaultMainContainer>
  );
}
