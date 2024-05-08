import { DefaultMainContainer } from "@/components/default-main-container";
import { ICourse } from "@/types/course";
import styles from "./teaching-page.module.scss";
import { lato } from "@/fonts";
import { ReactNode } from "react";
import { isHrefOuter } from "@/utils/is-href-outer";
import { UXAnchor } from "@/components/ux-anchor/ux-anchor";

export const TeachingPage = ({ courses }: { courses: ICourse[] }) => {
  return (
    <DefaultMainContainer
      embeddedTitle="Courses MAD group offers"
      image="/teaching.jpg"
      imageAlt="Students studying in a classroom"
      title="Teaching"
    >
      <section
        aria-labelledby="courses-tile"
        className={styles["courses-section"]}
      >
        <ul className={styles["courses-list"]}>
          {courses.map((course) => {
            const isHrefDefinedAndOuter =
              course.link && isHrefOuter(course.link);

            return (
              <li className={styles["course"]} key={course.title}>
                <h2 className={`${lato.className}`}>
                  <UXAnchor
                    text={course.title}
                    href={course.link}
                    className={styles["course-link"]}
                  />
                </h2>
                <p>{course.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </DefaultMainContainer>
  );
};
