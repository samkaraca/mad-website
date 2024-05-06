import { DefaultMainContainer } from "@/components/default-main-container";
import { ICourse } from "@/types/course";
import { readCourses } from "@/utils/read-file";

export async function getStaticProps() {
  return {
    props: {
      courses: await readCourses(),
    },
  };
}

export default function Teaching({ courses }: { courses: ICourse[] }) {
  return (
    <DefaultMainContainer
      image="/teaching.jpg"
      imageAlt="Students studying in a classroom"
      title="Teaching"
    >
      {courses.map((course) => {
        return (
          <section key={course.title}>
            <h1>{course.title}</h1>
            <h1>{course.description}</h1>
          </section>
        );
      })}
    </DefaultMainContainer>
  );
}
